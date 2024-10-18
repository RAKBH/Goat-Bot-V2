const axios = require("axios");
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const yts = require('yt-search');

const API_KEYS = [
    'b38444b5b7mshc6ce6bcd5c9e446p154fa1jsn7bbcfb025b3b',
    '719775e815msh65471c929a0203bp10fe44jsndcb70c04bc42',
    'a2743acb5amsh6ac9c5c61aada87p156ebcjsnd25f1ef87037',
    '8e938a48bdmshcf5ccdacbd62b60p1bffa7jsn23b2515c852d',
    'f9649271b8mshae610e65f24780cp1fff43jsn808620779631',
    '8e906ff706msh33ffb3d489a561ap108b70jsne55d8d497698',
    '4bd76967f9msh2ba46c8cf871b4ep1eab38jsn19c9067a90bb',
];

module.exports = {
    config: {
        name: "sing",
        aliases: ["song", "music"],
        version: "2.1",
        author: "NZ R",
        countDown: 60,
        category: "media",
        dependencies: { "fs-extra": "", "axios": "", "yt-search": "" }
    },
    onStart: async function ({ api, event, message }) {
        try {
            const query = event.type === "message_reply" && ["audio", "video"].includes(event.messageReply.attachments[0].type)
                ? (await axios.get(`https://audio-recon-ahcw.onrender.com/kshitiz?url=${encodeURIComponent(event.messageReply.attachments[0].url)}`)).data.title
                : event.body.substring(6).trim();

            if (!query) return api.setMessageReaction("❌", event.messageID, () => {}, true), message.reply("❗ Please provide a song title or attach an audio/video file.");

            api.setMessageReaction("⌛", event.messageID, () => {}, true);
            const song = (await yts(query)).videos[0];
            if (!song) return api.setMessageReaction("❌", event.messageID, () => {}, true), message.reply("No results found.");

            const response = await axios.get(`https://yt-kshitiz.vercel.app/download?id=${encodeURIComponent(song.videoId)}&apikey=${API_KEYS[Math.floor(Math.random() * API_KEYS.length)]}`);
            const videoUrl = response.data[0];
            if (!videoUrl) return api.setMessageReaction("❌", event.messageID, () => {}, true), message.reply("Failed to retrieve the download link.");

            const fileName = `${new Date().getTime()}.mp3`;
            const filePath = path.join(os.tmpdir(), fileName);
            const writer = fs.createWriteStream(filePath);

            (await axios({ url: videoUrl, method: 'GET', responseType: 'stream' })).data.pipe(writer);

            writer.on('finish', async () => {
                if (fs.statSync(filePath).size > 26214400) return fs.unlinkSync(filePath), message.reply("❌ File exceeds the 25MB limit.");

                message.reply({
                    body: `🎵 Here's your song, ${await api.getUserInfo(event.senderID).then(user => user[event.senderID].name)}..! 🎤\n\n` +
                          `• Title: ${song.title}\n` +
                          `• Artist: ${song.author.name}\n` +
                          `• Duration: ${song.timestamp}\n` +
                          `• Views: ${song.views}\n` +
                          `• Link: ${song.url}\n\n` +
                          `🎶 Enjoy! 🎶`,
                    attachment: fs.createReadStream(filePath)
                }, () => {
                    fs.unlinkSync(filePath);
                    api.setMessageReaction("✅", event.messageID, () => {}, true);
                });
            });

            writer.on('error', () => message.reply("Error downloading the video."));
        } catch (error) {
            console.error('[ERROR]', error);
            api.setMessageReaction("❌", event.messageID, () => {}, true);
            message.reply("An error occurred. Please try again.");
        }
    }
};
