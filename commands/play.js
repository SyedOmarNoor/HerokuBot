const Discord = require("discord.js");
const ytdl = require("ytdl-core");
//const process.env.FFMPEG_PATH = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe'
var ffmpegPath = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe'

module.exports.run = async (bots, message, args) => {
        if(!args[0]) {
            message.channel.send("Please provide a link.");
            return;
        }

        if(!message.member.voiceChannel) {
            message.channel.send("Please join a voice channel.");
            return;
        }
        //if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to a music channel.');

        let validate = await ytdl.validateURL(args[0]);
        if (!validate) return message.channel.send("Sorry, please input a valid url following the command.");

        let info = await ytdl.getInfo(args[0]);
        let connection = await message.member.voiceChannel.join();
        let dispatcher = await connection.playStream(ytdl(args[0], {
            filter: 'audioonly'
    }));

    message.channel.send('${info.title} is now playing');
    
}

module.exports.help = {
    name: "play",
    aliases: ["start"]
}