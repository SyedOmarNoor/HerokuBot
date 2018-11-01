const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const yayify = require('yayify');

module.exports.run = async (bots, message, args) => {
    //!!say Hi!
    //Hi!
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        return errors.noPerms(message, "MANAGE_MESSAGES");
    }
    //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
    let botmessage = args.join(" ");
    let yay = yayify(botmessage); 
    message.delete().catch(O_o=>{});
    message.channel.send(yay);
}

module.exports.help = {
    name: "yay"
}