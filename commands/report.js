const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!rUser) return message.channel.send("Couldn't find that user. Sorry.");
    
    let reason = args.join(" ").slice(22);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff0000")
    .addField("Reported user:", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by:", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", reason);
    
    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find any 'reports' channel.")
    
    message.delete().catch(O_o=>{});

    reportschannel.send(reportEmbed);
    
}

module.exports.help = {
    name: "report"
}