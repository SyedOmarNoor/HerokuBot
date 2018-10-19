const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let spoonembed = new Discord.RichEmbed()

    .setTitle("Sp(lat)oon")
    .setColor("#ffffff")
    .setImage('..commands//xw9igs0hjhc11.jpg');

    message.channel.send(spoonembed);
}

module.exports.help = {
    name: "spoon(WIP)"
}