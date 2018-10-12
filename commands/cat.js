const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bots, message, args) => {
    let {body} = await superagent
    .get('aws.random.cat//meow');

    let catembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Cat :cat:")
    .setImage(body.file);

    message.channel.send(catembed);
}

module.exports.help = {
    name: "cat"
}