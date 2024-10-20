const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "girl",
    version: "1.0",
    author: "Hassan",
    aliases: ["randomphoto", "girlphoto"],
    countDown: 5,
    role: 0,
    category: "Fun",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ event, message, api }) {
    const apiUrl = 'https://hasan-oi-girl-api.onrender.com/randomphoto';

    try {
      const cacheDir = path.join(__dirname, 'cache');
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      const res = await axios.get(apiUrl);
      const data = res.data;

      if (!data || !data.urls || !data.urls.full) {
        return message.reply("No image found from the API.");
      }

      const imageUrl = data.urls.full;
      const imagePath = path.join(__dirname, 'cache', 'randomphoto.jpg');
      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      await fs.promises.writeFile(imagePath, imageResponse.data);

      await message.reply({
        body: `Here's is a  girl photo 📸`,
        attachment: fs.createReadStream(imagePath)
      });

      fs.unlinkSync(imagePath);
    } catch (error) {
      console.error("Error fetching random photo:", error);
      message.reply("An error occurred while fetching the random photo.");
    }
  }
};
