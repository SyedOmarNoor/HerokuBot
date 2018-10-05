const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    return message.channel.send("See you soon!");
}

module.exports.help = {
    name: "goodbye"
}