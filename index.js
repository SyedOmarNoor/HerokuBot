const botconfig = require("./botconfig.json");
const token = process.env.token;
const Discord = require("discord.js");
const fs = require("fs")
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} is present and loaded!`)
        bot.commands.set(props.help.name, props);
    });

});

// In UNIX double slash (//) is not used for commenting but a hashtag (#) is.

bot.on("ready", async () => {
console.log(`${bot.user.username} should be online. Can you go see if it is?`);
//console.log(`Server : ${message.guild.name} | Channel : #${message.channel.name} | Userid : ${message.author.tag} | Message : ${message.content}\n`);
bot.user.setActivity("(is that music?)", {type: "LISTENING"});
});

bot.on("message", async message => {
if(message.author.bot) return;
if (message.channel.type === "dm") return;

let prefix = botconfig.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

var servers = {};

if(cmd === `v!`) return;

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot, message, args);


// if(cmd === `${prefix}report`){

//     //report @user reason

//     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

//     if(!rUser) return message.channel.send("Couldn't find that user. Sorry.");

//     let reason = args.join(" ").slice(22);

//     let reportEmbed = new Discord.RichEmbed()
//     .setDescription("Reports")
//     .setColor("#ff0000")
//     .addField("Reported user:", `${rUser} with ID: ${rUser.id}`)
//     .addField("Reported by:", `${message.author} with ID: ${message.author.id}`)
//     .addField("Channel:", message.channel)
//     .addField("Time:", message.createdAt)
//     .addField("Reason:", reason);

//     let reportschannel = message.guild.channels.find(`name`, "reports");
//     if(!reportschannel) return message.channel.send("Couldn't find any 'reports' channel.")

//     message.delete().catch(O_o=>{});
//     reportschannel.send(reportEmbed);

//     return;
// }

// if(cmd === `${prefix}hello`){
//     return message.channel.send("Hello boi! How are you doing?");
// }
// if(cmd === `${prefix}goodbye`){
//     return message.channel.send("See you soon!");
// }
// if(cmd === `${prefix}serverinfo`){

//     let sicon = message.guild.iconURL
//     let serverembed = new Discord.RichEmbed()
//     .setDescription("Server information")
//     .setColor("#000000")
//     .setThumbnail(sicon)
//     .addField("Server name:", message.guild.name)
//     .addField("Created on", message.guild.createdAt)
//     .addField("Date you joined:", message.member.joinedAt)
//     .addField("Total members:", message.guild.memberCount);

//     return message.channel.send(serverembed);

// }
// if(cmd === `${prefix}botinfo`){

//     let bicon = bot.user.displayAvatarURL;
//     let botembed = new Discord.RichEmbed()
//     .setDescription("Bot information")
//     .setColor("#ffffff")
//     .setThumbnail(bicon)
//     .addField("Bot name:", bot.user.username)
//     .addField("Created on:", bot.user.createdAt);

//     return message.channel.send(botembed);
// }
// if(cmd === `${prefix}help`){
//     return message.channel.send("Help coming soon!");
// }
// if(cmd === "dank memes"){
//     return message.channel.send("It doesn't work that way.");
// }

});

bot.login(token);