const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bots, message, args) => {
    // if(!args[1]) {
    //     message.channel.send("Please provide a link.");
    //     return;
    // }

    // if(!message.member.voiceChannel) {
    //     message.channel.send("Please join a voice channel.");
    //     return;
    // }
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild.');
    if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');

    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send('Sorry, please input a valid url following the command.');

    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.play(ytdl(args[0], {
        filter: 'audioonly'
    }));

    message.channel.send(Now playing: ${info.title});
}

module.exports.help = {
    name: "music"
}