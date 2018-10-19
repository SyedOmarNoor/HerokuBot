const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    
    let helpEmbed = new Discord.RichEmbed()
    
    .setDescription("Help and Command Information")
    .setColor("#ffffff")
    .addField("!!help", "Makes me give a list of commands")
    .addField("Info", " ")
    .addField("!!botinfo", "Makes me show information about myself")
    .addField("!!serverinfo", "Makes me show information about the server")
    .addField("!!rules", "Make me give a list of rules.")
    .addField("Moderation", " ")
    .addField("!!report", "Makes me make a report to the 'reports' channel. Usage: !!report @user reason")
    .addField("!!tempmute", "Makes me mute a user temporarily. Usage: !!tempmute @user (number)s/m/h/d")
    .addField("Fun", " ")
    .addField("!!hello", "Makes me say hello in return")
    .addField("!!goodbye", "Makes me say goodbye in return")
    .addField("!!beemovie", "Makes me recite the first three sentences of the Bee Movie")
    .addField("!!spoon", "Makes me show an edited picture of the Splatoon(/ 2) logo but without the 'lat' in it, alongside with an edited version of the '2' squid made to look like a spoon.")
    .addField("Music related", " ")
    .addField("!!play", "(WIP) Makes me play music. Usage: !!play (YouTube link)")
    .addField("!!stop", "(WIP) Makes me stop the music and exit the voice channel(/s).")
    .addField("!!pause", "(WIP) Makes me pause the music.")
    .addField("!!resume", "(WIP) Makes me resume the music.");

    // let args = message.content.slice(prefix.length).trim().split(/ +/g);
    // let command = args.shift().toLowerCase();

    // if(args[0]){
    //     switch (args[1]) {
    //         case "ping" :
    //             message.channel.send('Pong!');
    //             break;
    //         case "blah" :
    //             message.channel.send('Meh.');
    //             break;
    //     }
    // }
    // if(args[0]) {
        return message.channel.send(helpEmbed);
    // }

}

module.exports.help = {
    name: "help"
}