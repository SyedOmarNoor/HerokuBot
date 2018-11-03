const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    //!!clear 15
    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
    if(!args[0]) return message.channel.send("No amount stated. Usage: !!clear (Number of messages)");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
    });
}

module.exports.help = {
    name: "clear"
}