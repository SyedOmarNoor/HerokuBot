const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
const sql = require('sqlite');
const sqlite3 = require('sqlite3')

module.exports.noPerms = (message, perm) => {

    let tStamp = moment().format('LLLL'); //creates time stamp

    // if (message.channel.type == 'dm'){ //checks for DM - Creates a DM DB and records
    //     var db = new sql.Database();

    //     var data = db.export();
    //     var buffer = new Buffer(data);
    //     fs.writeFileSync("dm.sqlite", buffer);

    //     let dmName = `${message.author.username}DM`;
    //     sql.run(`INSERT INTO ${dmName} (username, message, timestamp, userID) VALUES (?,?,?,?)`, [message.author.username, message.content, tStamp, message.author.id]).catch(()=>{
    //         sql.run(`CREATE TABLE IF NOT EXISTS ${dmName} (username TEXT, message TEXT, timestamp TEXT, userID TEXT);`).then(() =>{
    //         sql.run(`INSERT INTO ${dmName} (username, message, timestamp, userID) VALUES (?,?,?,?)`, [message.author.username, message.content, tStamp, message.author.id]);
    //         })
    // })
    // }else{ //otherwise it's a normal channel
        var db = new sqlite3.Database('./chatlog.db');

        // var data = db.export();
        // var buffer = new buffer(data);
        // fs.writeFileSync("chatlog.db", buffer);

        db.run(`INSERT INTO ${message.channel.name} (username, message, timestamp, userID) VALUES (?,?,?,?)`, [message.author.username, message.content, tStamp, message.author.id]).catch(() =>{
            console.error;
            db.run(`CREATE TABLE IF NOT EXISTS ${message.channel.name} (username TEXT, message TEXT, timestamp TEXT, userID TEXT);`).then(() =>{
            db.run(`INSERT INTO ${message.channel.name} (username, message, timestamp, userID) VALUES (?,?,?,?)`, [message.author.username, message.content, tStamp, message.author.id]);
            }) // KNOWN ISSUE: Does not like channels with "-" in them
        })
    //}

}