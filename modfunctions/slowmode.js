const Discord = require("discord.js");
var UnityBot = new Discord.Client();
const fs = require('fs');


module.exports = { StatusSlowMode, slowmode };

function StatusSlowMode(BotData, message) {
    if (BotData.SlowMode.Channels.includes(message.channel.id)) {
        let indexis = BotData.SlowMode.Channels.indexOf(message.channel.id);
        let SetDelay = message.content.split(" ").slice(1).join(" ").trim();
        if (isNaN(parseInt(SetDelay, 10))) {
            BotData.SlowMode.Channels.splice(indexis, 1);
            BotData.SlowMode.DelayTime.splice(indexis, 1);
            message.reply(`**Slowmode**: Removed`);
        }
        else {
            BotData.SlowMode.DelayTime.splice(indexis, 1, SetDelay);
            message.reply(`**Slowmode**: Time changed to ${SetDelay}`);
        }
    }
    else {
        let SetDelay = message.content.split(" ").slice(1).join(" ").trim();
        if (isNaN(parseInt(SetDelay, 10))) return message.reply("**Slowmode**: A correct time was not specified?");
        console.log("Delay is " + SetDelay);
        BotData.SlowMode.Channels.push(message.channel.id);
        BotData.SlowMode.DelayTime.push(SetDelay);
        message.channel.sendMessage(`**Slowmode**: Activated with a delay of ${SetDelay}`);
    }
    fs.writeFile("./botstuff.json", JSON.stringify(BotData), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}

function slowmode(BotData, message) {
    let indexis = BotData.SlowMode.Channels.indexOf(message.channel.id);
    message.channel.overwritePermissions(message.author, {
        SEND_MESSAGES: false
    })
    setTimeout(enableperson, BotData.SlowMode.DelayTime[indexis] * 1000, (message));
}

function enableperson(message) {
    message.channel.overwritePermissions(message.author, {
        SEND_MESSAGES: true
    })
}
