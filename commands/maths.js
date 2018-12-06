const Discord = require("discord.js");

module.exports.run = async (bots, message, args) => {
    let mathsyay = args.split();

    let solution = eval(mathsyay);

}

module.exports.help = {
    name: "maths"
}