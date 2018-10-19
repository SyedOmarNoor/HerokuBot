const Discord = require("discord.js");
const queue = new Map();
const serverQueue = queue.get(message.guild.id);

module.exports.run = async (bots, message, args) => {
    if (!serverQueue) return msg.channel.send('There is nothing playing.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
}

module.exports.help = {
    name: "queue"
}
