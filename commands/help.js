const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {

    
    let helpEmbed = new Discord.RichEmbed()

    //:information_source: (info I(for information))
    //:scales: (moderation scales(like laws))
    //:ok_hand: (OK)
    //:face_palm: (face palm)
    //:question: (question mark)
    //:100: (100%)
    //:yum: (fun)
    //:musical_score: (music)

    
    .setDescription("Help and Command Information")
    .setColor("#ffffff")
    .addField("!!help", "Makes me give a list of commands")
    //.addField("Info", "(Blank space)")
    .addField(":information_source:!!botinfo", "Makes me show information about myself")
    .addField(":information_source:!!serverinfo", "Makes me show information about the server")
    .addField(":information_source:!!rules", "Make me give a list of rules.")
    //.addField("Moderation", "(Blank space)")
    .addField(":scales:!!report", "Makes me make a report to the 'reports' channel. Usage: !!report @user reason")
    .addField(":scales:!!tempmute", "Makes me mute a user temporarily. Usage: !!tempmute @user (number)s/m/h/d")
    //.addField("Fun", "(Blank space)")
    .addField(":yum::100:!!hello", "Makes me say hello in return")
    .addField(":yum::100:!!goodbye", "Makes me say goodbye in return")
    .addField(":yum::face_palm:!!beemovie", "Makes me recite the first three sentences of the Bee Movie")
    .addField(":yum::ok_hand:!!spoon", "Makes me show an edited picture of the Splatoon(/ 2) logo but without the 'lat' in it, alongside with an edited version of the '2' squid made to look like a spoon.")
    //.addField("Music related","(Blank space)")
    .addField(":musical_score:!!play", "(WIP, usable) Makes me play music. Usage: !!play (YouTube link)")
    .addField(":musical_score:!!stop", "(WIP, usable) Makes me stop the music and exit the voice channel(/s).")
    .addField(":musical_score:!!pause", "(more WIP, don't use) Makes me pause the music.")
    .addField(":musical_score:!!resume", "(more WIP, don't use) Makes me resume the music.")
    .addField(":musical_score:!!queue", "(more WIP, don't use) Makes me show the queue of music.");

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