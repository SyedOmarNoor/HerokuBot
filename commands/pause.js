const Discord = require("discord.js");
const queue = require(`./New folder/queuecommon.js`);
var ffmpegPath = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe';

module.exports.run = async (bots, message, args) => {
    const serverQueue = queue;
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send('⏸ Paused the music for you!');
    }
}

module.exports.help = {
    name: "pause"
}