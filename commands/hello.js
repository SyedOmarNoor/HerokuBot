const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    return message.channel.send("Hello boi! How are you doing?");
}

module.exports.help = {
    name: "hello"
}