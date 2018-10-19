const Discord = require("discord.js");
const queue = new Map();
const serverQueue = queue.get(msg.guild.id);

module.exports.run = async (bots, message, args) => {
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send('⏸ Paused the music for you!');
    }
}

module.exports.help = {
    name: "pause"
}