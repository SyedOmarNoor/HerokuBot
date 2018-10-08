const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let rulesEmbed = new Discord.RichEmbed()
    
    .setDescription("Rules")
    .setColor("#000000")
    .addField("Be a good person, like (what) Omar (should be).")
    .addBlankField()
    .addField("#1:", "Do not expose other people to inappropriate or undesired material (pictures, videos, audio, certain words used excessively).");

    return message.channel.send(rulesEmbed);
}

module.exports.help = {
    name: "rules"
}