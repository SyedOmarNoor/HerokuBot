const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let rulesEmbed = new Discord.RichEmbed()
    
    .setDescription("Rules")
    .setColor("#000000")
    .addField("Be a good person", "That includes:")
    .addField("#1:", "Do not expose other people to inappropriate or undesired material (inappropriate pictures or videos, loud audio) or behaviours (spamming, 'Sucide' (spelling, Darren) encouragement or threats, racism, excessive use of swear and/or curse words).")
    .addField("#2:", "Use specific channels for specific purposes. If you want to say something random, you are more likely to be allowed to say it in #general instead of, for example, #announcements. If you are unsure of what a channel is for, direct message Darren Cherk ( @Pandemic#9988 (Server Owner, Server Creator and Core)) for information.");
    
    return message.channel.send(rulesEmbed);
}

module.exports.help = {
    name: "rules"
}