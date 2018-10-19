const Discord = require("discord.js");
let spoon = './xw9igs0hjhc11.jpg';

module.exports.run = async (bots, message, args) => {

    let spoonembed = new Discord.RichEmbed()

    .setTitle("Sp(lat)oon")
    .setColor("#ffffff")
    .setImage('..commands//xw9igs0hjhc11.jpg');

    message.channel.send(spoonembed);
}

module.exports.help = {
    name: "spoon"
}