const Discord = require("discord.js");
const errors = require("../utils/errors.js")

module.exports.run = async (bots, message, args) => {
    //!!say Hi!
    //Hi!
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
    let botmessage = args.join(` `);
    message.delete().catch();
    message.channel.send(botmessage);
    
}

module.exports.help = {
    name: "say"
}