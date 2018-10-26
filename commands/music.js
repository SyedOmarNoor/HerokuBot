const Discord = require("discord.js");
const fs = require("fs");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('');
const bot = new Discord.Client({disableEveryone: true});
let cmd2 = args[0]