const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {    

    let bicon = bots.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot information")
    .setColor("#ffffff")
    .setThumbnail(bicon)
    .addField("Bot name:", bots.user.username)
    .addField("Created on:", bots.user.createdAt);

    return message.channel.send(botembed);

}
module.exports.help = {
    name: "botinfo"
}