const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bots, message, args) => {

    let spoonembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Sp(lat)oon")
    .setImage('./commands/xw9igs0hjhc11.jpg');

    message.channel.send(spoonembed);
}

module.exports.help = {
    name: "spoon"
}