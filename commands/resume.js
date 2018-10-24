var queue = require('./New folder/queuecommon.js');
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
var ffmpegPath = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe';
function resume(connection, message) {
    var server = server[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    queue.shift();
    server.dispatcher.on("resume", function() {
        if(queue[0]){
        play(connection, message);
        }
        else connection.resume();
    })
}
module.exports.run = async (bots, message, args) => {
    var serverQueue = queue;
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return message.channel.send('▶ Resumed the music for you!');
    }
}

module.exports.help = {
    name: "resume"
}