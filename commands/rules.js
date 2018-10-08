const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let rulesEmbed = new Discord.RichEmbed()
    
    .setDescription("Rules")
    .setColor("#000000")
    .addField("Be a good person", "That includes:")
    .addField("#1:", "Do not expose other people to inappropriate or undesired material (inappropriate pictures or videos, loud audio) or behaviours (spamming, 'Sucide' (spelling, Darren) encouragement or threats, racism, excessive use of swear and/or curse words).")
    .addField("#2:", "");
    return message.channel.send(rulesEmbed);
}

module.exports.help = {
    name: "rules"
}