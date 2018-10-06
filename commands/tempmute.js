const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bots, message, args) => {

    //!!tempmute @user 1s/m/h/d

    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Couldn't find that user.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't mute them.");
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                color:"#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermission(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                
                });
            });
        }catch(e){
            console.log(e.stack)
        }
    }
    
}

module.exports.help = {
    name: "tempmute"
}