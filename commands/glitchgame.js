const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bots, message, args) => {
    let {body} = await superagent
    .get('https://springy-particles.glitch.me/');

    let glitchgameembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Glitch game")
    .setImage(body);

    message.channel.send(glitchgameembed);
}

module.exports.help = {
    name: "glitchgame"
}