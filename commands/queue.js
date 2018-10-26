import ('../index.js') ;
const Discord = require("discord.js");
var ffmpegPath = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe';

module.exports.run = async (bots, message, args) => {
    var serverQueue = queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(` __**Song queue:**__ ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')} **Now playing:** ${serverQueue.songs[0].title}`);
}

module.exports.help = {
    name: "queue"
}
