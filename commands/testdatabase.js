const Discord = require("discord.js");
const Report = require("../models/reportscheme.js");
const mongoose = require("mongoose");



module.exports.run = async (bots, message, args) => {
    mongoose.connect('mongodb://localhost/Reports');
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!rUser) return message.channel.send("Couldn't find that user. Sorry.");
    
    let reason = args.join(" ").slice(22);




    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.username,
        userID: rUser.id,
        reason: 
    })
}

module.exports.help = {
    name: "testdatabase"
}