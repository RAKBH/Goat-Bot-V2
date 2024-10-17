const axios = require('axios');
 
module.exports = {
  config: {
    name: "artvideo",
    aliases: ["artv"],
    version: "1.0",
    author: "Fahim_Noob", 
    countDown: 5,
    role: 0,
    longDescription: "artvideo video.",
    category: "video",
    guide: "{p}artvideo",
  },
 
  onStart: async function ({ api, event, message }) {
    try {
      api.setMessageReaction("⏳", event.messageID, () => {}, true);
 
      const { data } = await axios.get("https://smfahim.onrender.com/random/artvideo/apikey=puti");
      if (data.code !== 200) throw new Error("API issue");
 
      const fileId = data.url.match(/\/d\/(.+?)\//)[1];
      const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      const { data: videoStream } = await axios.get(directUrl, { responseType: 'stream' });
 
      await message.reply({ body: ``, attachment: videoStream });
 
      api.setMessageReaction("✅", event.messageID, () => {}, true);
    } catch (error) {
      console.error('Error', error);
      message.reply({ body: "Error occurred while processing your request" });
    }
  },
};
