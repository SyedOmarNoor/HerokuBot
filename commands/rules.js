const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let rulesEmbed = new Discord.RichEmbed()
    
    .setDescription("Rules")
    .setColor("#000000")
    .addField("#1","Be a good person, like (what) Omar (should be)." )

    return message.channel.send(rulesEmbed);
}

module.exports.help = {
    name: "rules"
}