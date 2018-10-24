const Discord = require("discord.js");
const queue = require(`./New folder/queuecommon.js`);
var ffmpegPath = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe';

module.exports.run = async (bots, message, args) => {
    var serverQueue = queue;
    if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(` __**Song queue:**__ ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')} **Now playing:** ${serverQueue.songs[0].title}`);
}

module.exports.help = {
    name: "queue"
}
