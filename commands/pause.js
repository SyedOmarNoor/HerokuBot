const Discord = require("discord.js");
const queue = new Map();

module.exports.run = async (bots, message, args) => {
    const serverQueue = queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send('⏸ Paused the music for you!');
    }
}

module.exports.help = {
    name: "pause"
}