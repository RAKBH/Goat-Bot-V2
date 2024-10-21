const axios = require("axios");
const fs = require("fs");
const path = require("path");
let lang = "question"; 

module.exports = {
    config: {
        name: "tod",
        version: "1.0",
        author: "Vex_Kshitiz",
        role: 0,
        shortDescription: "play truth and dare game",
        longDescription: "play truth and dare game supports many langauge",
        category: "game",
        guide: {
            en: "{p}tod [truth/dare] [lang/reset]",
        },
    },

    onStart: async function ({ api, event }) {
        const commandParts = event.body.split(' ');
        const subCommand = commandParts[1];
        const langCommand = commandParts[2];

        console.log("r", subCommand, langCommand);

        if (subCommand === "truth") {
            await this.sendTruth(api, event, lang);
        } else if (subCommand === "dare") {
            await this.sendDare(api, event, lang);
        } else if (subCommand === "lang") {
            if (langCommand && langCommand !== "reset") {
                if (this.isValidLanguage(langCommand)) {
                    lang = langCommand;
                    await api.sendMessage(`Language set to ${langCommand}`, event.threadID, event.messageID);
                } else {
                    await api.sendMessage(`Language '${langCommand}' not available.\nAvailable languages are: bn, de, es, fr, hi, tl`, event.threadID, event.messageID);
                }
            } else if (langCommand === "reset") {
                lang = "question"; 
                await api.sendMessage(`Language reset to default`, event.threadID, event.messageID);
            } else {
                await api.sendMessage("Invalid language command.\nUse 'reset' to reset to the default language\nor provide a language code\n(e.g., 'bn' for Bengali)", event.threadID, event.messageID);
            }
        } else {
            await api.sendMessage("Invalid command. ex: tod truth or tod dare\nto select language tod lang {lang}", event.threadID, event.messageID);
        }
    },

    isValidLanguage: function(lang) {
        const availableLanguages = ["bn", "de", "es", "fr", "hi", "tl"];
        return availableLanguages.includes(lang);
    },

    sendTruth: async function (api, event, lang) {
        try {
            const response = await axios.get("https://api.truthordarebot.xyz/v1/truth");
            const question = response.data.translations[lang] || response.data.question;

            await api.sendMessage(`${question}`, event.threadID, event.messageID);
        } catch (error) {
            console.error("Error fetching truth question:", error);
            await api.sendMessage("Error fetching truth question", event.threadID, event.messageID);
        }
    },

    sendDare: async function (api, event, lang) {
        try {
            const response = await axios.get("https://api.truthordarebot.xyz/v1/dare");
            const question = response.data.translations[lang] || response.data.question;

            await api.sendMessage(`${question}`, event.threadID, event.messageID);
        } catch (error) {
            console.error("Error fetching dare question:", error);
            await api.sendMessage("Error fetching dare question", event.threadID, event.messageID);
        }
    },
};
