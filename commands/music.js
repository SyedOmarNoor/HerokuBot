const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    if(!args[1]) {
        message.channel.send("Please provide a link.");
        return;
    }

    if(!message.member.voiceChannel) {
        message.channel.send("Please join a voice channel.");
        return;
    }
}

module.exports.help = {
    name: "music"
}