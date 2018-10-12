const Discord = require("discord.js");
const superagent = require("superagent);

module.exports.run = async (bots, message, args) => {
    let {body} = await superagent
    .get('https://random.dog/woof.json');

    let dogembed = new Discord.RichEmbed()
    .setColor("#ffffff")
    .setTitle("Dog")
    .setImage(body.url);

    message.channel.send(dogembed);
}

module.exports.help = {
    name: "cat"
}