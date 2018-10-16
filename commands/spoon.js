const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bots, message, args) => {
    let {body} = await superagent
    .get('https://i.redd.it/xw9igs0hjhc11.jpg');

    let spoonembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    //.setTitle("Cat :cat:")
    .setImage(body);

    message.channel.send(spoonembed);
}

module.exports.help = {
    name: "cat"
}