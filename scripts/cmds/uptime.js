 module.exports = {
  config: {
    name: "uptime",
    aliases: ["upt"],
    version: "1.5",
    author: "NZ R",
    role: 0,
    shortDescription: {
      en: "Displays the bot's uptime and detailed system information"
    },
    longDescription: {
      en: "Displays the bot's uptime in days, hours, minutes, seconds, and milliseconds along with detailed system information such as memory usage, CPU load, network interfaces, active users, shell/terminal uptime, disk usage, and more."
    },
    category: "system",
    guide: {
      en: "Use {p}uptime to check the bot's uptime and detailed system information."
    }
  },
  onStart: async function ({ api, event }) {
    const os = require('os');
    const exec = require('child_process').exec;

    try {
      const uptime = process.uptime() * 1000; // Convert to milliseconds

      const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
      const milliseconds = Math.floor(uptime % 1000);

      let uptimeString = '';
      if (days > 0) uptimeString += `${days} Day${days !== 1 ? 's' : ''} `;
      if (hours > 0) uptimeString += `${hours} Hour${hours !== 1 ? 's' : ''} `;
      if (minutes > 0) uptimeString += `${minutes} Minute${minutes !== 1 ? 's' : ''} `;
      if (seconds > 0) uptimeString += `${seconds} Second${seconds !== 1 ? 's' : ''} `;
      uptimeString += `${milliseconds} Millisecond${milliseconds !== 1 ? 's' : ''}`;

      const totalMemory = os.totalmem() / (1024 ** 3); // in GB
      const freeMemory = os.freemem() / (1024 ** 3); // in GB
      const usedMemory = totalMemory - freeMemory;
      const memoryUsage = `Total Memory: ${totalMemory.toFixed(2)} GB\nFree Memory: ${freeMemory.toFixed(2)} GB\nUsed Memory: ${usedMemory.toFixed(2)} GB`;

      const loadAverage = os.loadavg();
      const load = `Load Average (1, 5, 15 min): ${loadAverage[0].toFixed(2)}, ${loadAverage[1].toFixed(2)}, ${loadAverage[2].toFixed(2)}`;

      const cpuInfo = os.cpus()[0];
      const cpu = `CPU: ${cpuInfo.model}\nSpeed: ${cpuInfo.speed} MHz`;

      const networkInterfaces = os.networkInterfaces();
      let networkInfo = 'Network Interfaces:\n';
      for (const [name, infos] of Object.entries(networkInterfaces)) {
        for (const info of infos) {
          networkInfo += `  ${name} - ${info.family} - ${info.address} ${info.internal ? '(Internal)' : ''}\n`;
        }
      }

      const osType = os.type();
      const osPlatform = os.platform();
      const osArch = os.arch();
      const osRelease = os.release();
      const systemInfo = `OS Type: ${osType}\nPlatform: ${osPlatform}\nArchitecture: ${osArch}\nRelease: ${osRelease}`;

      // Get shell/terminal uptime
      exec('uptime -p', (error, stdout) => {
        let shellUptime = 'N/A';
        if (!error) {
          shellUptime = stdout.trim();
        }

        // Get active users
        exec('who -q', (error, stdout) => {
          let activeUsers = 'N/A';
          if (!error) {
            const usersMatch = stdout.match(/# users=(\d+)/);
            if (usersMatch) {
              activeUsers = usersMatch[1];
            }
          }

          // Get disk usage
          exec('df -h', (error, stdout) => {
            let diskUsage = 'N/A';
            if (!error) {
              diskUsage = stdout.trim();
            }

            const message = `
🚀 MeTa-Running-Time
⏰ Uptime: ${uptimeString}
🧠 Memory Usage:
${memoryUsage}
💻 System Load:
${load}
🔧 CPU Info:
${cpu}
🌐 Network Info:
${networkInfo}
🔍 System Info:
${systemInfo}
📟 Shell/Terminal Uptime:
${shellUptime}
👥 Active Users:
${activeUsers}
          `;
            
            api.sendMessage (message, event.threadID);
          });
        });
      });

    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving system information.", event.threadID);
    }
  }
};
