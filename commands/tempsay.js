const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bots, message, args) => {

    //!!tempsay 1(in seconds) (content)

    
        
        // if(!muterole){
        //     try{
        //         muterole = await message.guild.createRole({
        //             name: "muted",
        //             color:"#000000",
        //             permissions: []
        //         })
        //         message.guild.channels.forEach(async (channel, id) => {
        //             await channel.overwritePermissions(muterole, {
        //                 SEND_MESSAGES: false,
        //                 ADD_REACTIONS: false
                    
        //             });
        //         });
        //     }catch(e){
        //         console.log(e.stack)
        //     }
        // }
        // //end of create role
        // if(!args[1]){
        //     message.reply("Usage: !!tempmute @user (n)s/m/h/d");
        //     return;
        // }
        let mutetime = args[0];
        if(!mutetime) return message.reply("You didn't specify a time.");

        //let argsyay = args.shift;
        //let tempbotmessage = args.join(" ");
        let tempbotmessage = args[1]
        //let tempbotmessage = args.shift;

        message.delete().catch(O_o=>{});
        message.channel.send(tempbotmessage).then(msg => msg.delete(mutetime * 1000));

        // setTimeout(function(){
        //     message.delete().catch(O_o=>{});
        // }, ms(mutetime));


    
//end of module
}

module.exports.help = {
    name: "tempsay"
}