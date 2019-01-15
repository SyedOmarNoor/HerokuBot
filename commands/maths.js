const Discord = require("discord.js");
const math = require('mathjs');

module.exports.run = async (bots, message, args) => {
    // let mathsyay = args.split();

    // let solution = eval(mathsyay);
    
    let resp;
    //let yayay = args.replace(/x/g, "*"); 
    try {
        resp = math.eval(args);
    } catch (e) {
        return message.channel.send("Input a valid equation");
    };
    
    //resp.allReplace({'x': '*', 'b': 'o'})
    message.channel.send(resp);
}

module.exports.help = {
    name: "maths"
}