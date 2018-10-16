const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send(`@everyone`);
}

module.exports.help = {
    name: "ping"
}