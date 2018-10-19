const Discord = require("discord.js");
const queue = new Map();

module.exports.run = async (bots, message, args) => {
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
}

module.exports.help = {
    name: "queue"
}
