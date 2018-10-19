const Discord = require("discord.js");
const queue = new Map();

module.exports.run = async (bots, message, args) => {
    const serverQueue = queue.get[message.guild.id];
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return message.channel.send('▶ Resumed the music for you!');
    }
}

module.exports.help = {
    name: "resume"
}