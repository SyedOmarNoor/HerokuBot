const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bots, message, args) => {

    //!!tempmute @user 1s/m/h/d

    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Couldn't find that user. Usage: !!tempmute @user ((number)s/m/h/d)");
    if(!tomute.hasPermission("ADMINISTRATOR")) return message.reply("You can't mute them.");
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(tomute.hasPermission("ADMINISTRATOR")){
        
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "Muted",
                    color:"#000000",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    
                    });
                });
            }catch(e){
                console.log(e.stack)
            }
        }
        // //end of create role
        // if(!args[1]){
        //     message.reply("Usage: !!tempmute @user (n)s/m/h/d");
        //     return;
        // }
        let mutetime = args[1];
        if(!mutetime) return message.reply("You didn't specify a time.");

        await(tomute.addRole(muterole.id));
        let tempmutechannel = message.guild.channels.find(`name`, "incidents");
        if(!tempmutechannel) return message.channel.send("Couldn't find any 'incidents' channel.")
        message.delete().catch(O_o=>{});
        tempmutechannel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}.`);

        setTimeout(function(){
            tomute.removeRole(muterole.id);
            tempmutechannel.send(`<@${tomute.id}> has been unmuted!`);
        }, ms(mutetime));


    }
//end of module
}

module.exports.help = {
    name: "tempmute"
}