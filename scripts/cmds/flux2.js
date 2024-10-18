module.exports = {
  config: {
    name: "flux",
    author: "NZ R",
    countDown: 10,
    category: "ai-generated",
    guide: {
      en: "{P}flux <prompt> --<ratio>\n\nOptional ratios:\n\n--1 for regular (1:1)\n--2 for 4:14\n--3 for 16:9\n\nExample: -flux 'your prompt' --1\n\n[FLUX.2 Model Image Generations]"
    },
  },
  onStart: async ({ message: { reply: r, unsend }, args: a }) => {
    if (a.length === 0) {
      return r("FLUX GENERATOR USAGE\n\n" + module.exports.config.guide.en);
    }

    let pr = a.join(" ");
    if (!pr) return r("⛔ | Please provide a query for image generation.");

    let ratio = "1:1"; 
    let ratioName = "Regular (1:1)"; 
    let m = pr.match(/--(\d)$/); 

    if (m) {
      const ratioMapping = {
        "1": { value: "1:1", name: "Regular (1:1)" },
        "2": { value: "4:14", name: "4:14" },
        "3": { value: "16:9", name: "16:9" }
      };
      const selectedRatio = ratioMapping[m[1]];
      if (selectedRatio) {
        ratio = selectedRatio.value;
        ratioName = selectedRatio.name;
      }
      pr = pr.replace(/--\d$/, "").trim();
    }

    const requestStartTime = Date.now(); 

    const waitingMessage = await r(" ⏰ | Generating image... Please wait...");
    const waitingMessageID = waitingMessage.messageID; 

    try {
      const imageURL = `https://flux-pro-by-nzr-meta.onrender.com/generate?prompt=${encodeURIComponent(pr)}&ratio=${encodeURIComponent(ratio)}`;

      const generationStartTime = Date.now(); 
      const attachment = await global.utils.getStreamFromURL(imageURL);
      const generatorTime = ((Date.now() - generationStartTime) / 1000).toFixed(2);

      unsend(waitingMessageID);

      const totalTime = ((Date.now() - requestStartTime) / 1000).toFixed(2); 

      r({
        body: `✅ | Flux AI Image Generated\n• Ratio: ${ratioName}\n• Image Generated in: ${generatorTime} seconds\n`,
        attachment: attachment
      });

    } catch (err) {
      unsend(waitingMessageID);
      r(`❌ | Error: ${err.message}`);
    }
  }
};
