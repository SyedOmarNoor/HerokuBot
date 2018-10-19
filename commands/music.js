const Discord = require("discord.js");
const ytdl = require("ytdl-core");
//const process.env.FFMPEG_PATH = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe'
var ffmpegPath = './node_modules/ffmpeg-binaries/bin/ffmpeg.exe'
const botconfig = require("./botconfig.json");

module.exports.run = async (bots, message, args) => {
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    if(cmd === `${prefix}music'){
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
        if (!validate) return message.channel.send('Sorry, please input a valid url following the command.');

        let info = await ytdl.getInfo(args[0]);
        let connection = await message.member.voiceChannel.join();
        let dispatcher = await connection.playStream(ytdl(args[0], {
            filter: 'audioonly'
        }));

        message.channel.send("Now playing: ${info.title}");
    }
}

module.exports.help = {
    name: "music",
    aliases: ["start"]
}