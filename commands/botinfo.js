const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {    

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot information")
    .setColor("#ffffff")
    .setThumbnail(bicon)
    .addField("Bot name:", bot.user.username)
    .addField("Created on:", bot.user.createdAt);

    return message.channel.send(botembed);

}
module.exports.help = {
    name: "botinfo"
}