const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let sicon = message.guild.iconURL
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server information")
    .setColor("#000000")
    .setThumbnail(sicon)
    .addField("Server name:", message.guild.name)
    .addField("Created on", message.guild.createdAt)
    .addField("Date you joined:", message.member.joinedAt)
    .addField("Total members:", message.guild.memberCount);

    return message.channel.send(serverembed);
    
}

module.exports.help = {
    name: "serverinfo"
}