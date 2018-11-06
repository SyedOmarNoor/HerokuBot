const nations = require("../../nations.json");
const moment = require("moment");

String.prototype.isNumber = function() {
  return /^\d+$/.test(this);
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.removeSpacesAndLower = function() {
  let str = this.replace(/\s+/g, "");
  return str.toLowerCase();
};

function checkForNation(str) {
  //console.log("Checking for nation: " + str);
  for (let nation of nations) {
    //console.log("Is " + nation.name + " = " + str);
    if (nation.name === str) {
      //console.log(nation.name + " = " + str);
      return true;
    }
  }
  return false;
}

function findMembersWithRoles(rolesArr, guild) {
  //rolesArr contains an array of role names
  return guild.members.filter(member => {
    for (let value of rolesArr) {
      if (value.constructor === Array) {
        for (let subValue of value) {
          if (!member.roles.has(getRoleByName(member, subValue).id)) {
            //console.log(member.user.username + " does not have role: " + value + ". Returning false.");
            return false;
          }
        }
      } else {
        if (!member.roles.has(getRoleByName(member, value).id)) {
          //console.log(member.user.username + " does not have role: " + value + ". Returning false.");
          return false;
        }
      }
    }
    //console.log(member.user.username + " has all the following roles: " + rolesArr);
    return true;
  });
}

function findGuildMember(message, guild) {
  return guild.fetchMember(message.author.id);
}

function checkIfTeamLeader(member) {
  var callerIsTeamLeader = member.roles.has(
    getRoleByName(member, "Team Leader").id
  );
  if (!callerIsTeamLeader) {
    member.user.send("You must be a Team Leader to use this command");
    return false;
  } else {
    return true;
  }
}

function getChannelByName(member, str) {
  //console.log("ENTERED GET ROLE");
  str.removeSpacesAndLower();
  let myChannel = member.guild.channels.find("name", str);
  //console.log("FOUND ROLE");
  if (myChannel) {
    let customChannel = {
      name: myChannel.name,
      id: myChannel.id,
      obj: myChannel
    };
    //console.log("ROLE IS: " + myRole.id);
    //console.log(customRole);
    //console.log("RETURNING " + customRole);
    return customChannel;
  } else {
    return false;
  }
}

function getRoleByName(member, str) {
  //console.log("ENTERED GET ROLE");
  let myRole = member.guild.roles.find("name", str);
  //console.log("FOUND ROLE");
  if (myRole) {
    let customRole = {
      name: myRole.name,
      id: myRole.id
    };
    //console.log("ROLE IS: " + myRole.id);
    //console.log(customRole);
    //console.log("RETURNING " + customRole);
    return customRole;
  } else {
    return false;
  }
}

function sendStaffMessage(caller, rolesArr, guild) {
  for (let value of rolesArr) {
    let members = findMembersWithRoles([caller.nation, value], guild);
    let str = value + ": ";
    for (let member of members.values()) {
      str += member.user.username + " ";
    }
    caller.member.send(str);
  }
}

function findMemberNationality(member) {
  //console.log("Made it");
  let nationality = "none";
  for (let i = 0; i < nations.length; i++) {
    //console.log(nations[i].name);
    if (member.roles.has(getRoleByName(member, nations[i].name).id)) {
      nationality = nations[i].name;
      //console.log("User is from " + nationality);
      return nationality;
    }
  }
  return nationality;
}

function bfnEvent() {
  this.date = "";
  this.maxSignUps = 0;
  this.text = "";
  this.id = 0;
  this.creatorID = "";
  this.signedUpCount = 0;
  this.participants = "";
  this.active = 1;
  this.nation = "";
}

function spawnChannel(caller, id, bot, guild) {
  //let channel;
  if (!caller.nation) caller.nation == "";
  let channelName = "Event" + caller.nation + id;
  //console.log(guild.channels);
  //console.log("Does " + channelName.toLowerCase() + " already exist? : " + guild.channels.exists("name", channelName.toLowerCase()));
  if (guild.channels.exists("name", channelName.toLowerCase()))
    return caller.member.send("Channel already created");
  guild.createChannel(channelName, "text").then(channel => {
    console.log("Creating Channel " + channel.name);
    channel
      .overwritePermissions(guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
      .then(() => {
        channel.overwritePermissions(bot.user, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        channel.overwritePermissions(caller.member, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
      })
      .catch(console.error);
  });
}

function addMemberToChannel(caller, id, guild) {
  if (!caller.nation) {
    caller.nation == "";
  }
  let channelName = "Event" + caller.nation + id;
  console.log(channelName);
  console.log(
    "does the channel exists: " +
      guild.channels.exists("name", channelName.toLowerCase())
  );
  if (guild.channels.exists("name", channelName.toLowerCase())) {
    guild.channels
      .find("name", channelName.toLowerCase())
      .overwritePermissions(caller.member, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      });
  }
}

function removeMemberFromChannel(caller, id, guild) {
  if (!caller.nation) {
    caller.nation == "";
  }
  let channelName = "Event" + caller.nation + id;
  console.log(channelName);
  console.log(
    "does the channel exists: " +
      guild.channels.exists("name", channelName.toLowerCase())
  );
  if (guild.channels.exists("name", channelName.toLowerCase())) {
    guild.channels
      .find("name", channelName.toLowerCase())
      .overwritePermissions(caller.member, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      });
  }
}

function logCommand(message) {
  console.log(
    moment()
      .utcOffset(-4)
      .format("dddd, MMMM Do YYYY, h:mm:ss a") +
      " Channel: " +
      message.channel.name +
      " " +
      message.author.username +
      " has called the command: " +
      message.content
  );
}

module.exports = {
  checkForNation: checkForNation,
  findMembersWithRoles: findMembersWithRoles,
  findMemberNationality: findMemberNationality,
  getRoleByName: getRoleByName,
  findGuildMember: findGuildMember,
  getChannelByName: getChannelByName,
  checkIfTeamLeader: checkIfTeamLeader,
  sendStaffMessage: sendStaffMessage,
  bfnEvent: bfnEvent,
  spawnChannel: spawnChannel,
  addMemberToChannel: addMemberToChannel,
  removeMemberFromChannel: removeMemberFromChannel,
  logCommand: logCommand
};
