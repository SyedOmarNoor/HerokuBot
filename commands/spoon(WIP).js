const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    const attachment = new Attachment('./xw9igs0hjhc11.jpg');
    message.channel.send(attachment)
}

module.exports.help = {
    name: "spoon(WIP)"
}