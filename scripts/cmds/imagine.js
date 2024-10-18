 const axios = require('axios');

module.exports = {
  config: {
    name: "imagine",
    author: "NZ R",
    countDown: 10,
    category: "ai-generated",
    guide: {
      en: "Usage:\n-imagine your prompt\n\nExample:\n-imagine A cute cat"
    },
  },
  onStart: async ({ message: { reply: r, unsend }, args: a }) => {
    if (a.length === 0) {
      return r("IMAGINE GENERATOR USAGE\n\n" + module.exports.config.guide.en);
    }

    let pr = a.join(" ");
    if (!pr) return r("⛔ | Please provide a query for image generation.");

    const requestStartTime = Date.now(); 

    const waitingMessage = await r(" ⏰ | Generating image... Please wait...");
    const waitingMessageID = waitingMessage.messageID; 

    try {
      const imageURL = `https://imagine-v2-by-nzr-meta.onrender.com/generate?prompt=${encodeURIComponent(pr)}`;

      const generationStartTime = Date.now(); 
      const response = await axios({
        url: imageURL,
        method: 'GET',
        responseType: 'stream'
      });
      const attachment = response.data;
      const generatorTime = ((Date.now() - generationStartTime) / 1000).toFixed(2);

      unsend(waitingMessageID);

      const totalTime = ((Date.now() - requestStartTime) / 1000).toFixed(2); 

      r({
        body: `✅ | Imagine AI Image Generated\n• Image Generated in: ${generatorTime} seconds\n`,
        attachment: attachment
      });

    } catch (err) {
      unsend(waitingMessageID);
      r(`❌ | Error: ${err.message}`);
    }
  }
};
