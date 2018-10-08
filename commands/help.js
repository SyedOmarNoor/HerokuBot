const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    let helpEmbed = new Discord.RichEmbed()
    
    .setDescription("Help and Command Information")
    .setColor("#ffffff")
    .addField("!!help", "Makes me give a list of commands")
    .addField("!!hello", "Makes me say hello in return")
    .addField("!!goodbye", "Makes me say goodbye in return")
    .addField("!!botinfo", "Makes me show information about myself")
    .addField("!!serverinfo", "Makes me show information about the server")
    .addField("!!report", "Makes me make a report to the 'reports' channel. Usage: !!report @user reason")
    .addField("!!tempmute", "Makes me mute a user temporarily (not coded yet, I don't know what it actually does)")
    .addField("!!beemovie", "Makes me recite the first three sentences of the Bee Movie")
    .addField("!!spoon", "Makes me show an edited picture of the Splatoon logo but without the 'lat' in it, alongside with an edited version of the '2' squid made to look like a spoon.")
    .addField("!!rules", "Make me give a list of rules.")
    .addField("!!music", "Oi how did you know that existed? It's not finished, let alone started.");

    return message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}