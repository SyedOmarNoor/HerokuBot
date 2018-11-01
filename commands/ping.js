const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send(`@everyone`).then(msg => msg.delete(5000));
}

module.exports.help = {
    name: "ping"
}