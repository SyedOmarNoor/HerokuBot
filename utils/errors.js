const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const fs = require("fs")

module.exports.noPerms = (message, perm) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("No Permissions")
    .addField("Insufficient permissions", perm);

    message.channel.send(embed).then(m => m.delete(5000));

}