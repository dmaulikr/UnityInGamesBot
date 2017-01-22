const Discord = require("discord.js");
var UnityBot = new Discord.Client();

process.on("unhandledRejection", (err) => {
    console.error(`Uncaught Promise Error: \n${err.stack}`);
});

const fs = require('fs');

console.log("-bot: Loading Config: Auth");
const AuthFile = require("./configure/auth.json");

console.log("-bot: Loading Commands");
const CommandsFile = require("./commands.json");
console.log("-Commands: OnOff");
const ModOnOff = require("./modules/OnOff.js");
console.log("-Commands: RoleID");
const ModRoleID = require("./modules/RoleID.js");
console.log("-Commands: Nominate");
const ModNominate = require("./modules/Nominate.js");
console.log("-Commands: Discord");
const ModDiscord = require("./modules/Discord.js");
console.log("-Commands: Help");
const ModGuide = require("./modules/Guide.js");
console.log("-Commands: Guide");
const ModHelp = require("./modules/Help.js");
console.log("-Commands: Info");
const ModInfo = require("./modules/Info.js");
console.log("-Commands: Quote");
const ModQuote = require("./modules/Quote.js");
console.log("-Commands: Roles");
const ModRoles = require("./modules/Roles.js");

console.log("-bot: Loading Config: Commands")
const ComData = require("./configure/commands.json");

console.log("-Bot: Loading Intercept");
const ModIntercept = require("./modules/Intercept.js");


UnityBot.on("message", function (message) {

    if (message.author.bot) return;

    if (message.content.startsWith(">")) {
        if (ComData.Intercept == "disabled") return;
        if (ComData.Bot == "disabled") return;

        ModIntercept.intercept(message,ModRoles)
    }
    
    if (!message.content.startsWith(ComData.Prefix)) return;
    cmd = message.content.toLowerCase().substring(1).split(" ")[0];
    msg = message.content.split(" ").slice(1).join(" ").trim();
    msgl = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();
    console.log(`cmd = ${cmd} msg = ${msg}`);
    if (CommandsFile.commands.Activate.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        ModOnOff.On(ComData, message);
        return;
    }

    if (ComData.Bot == "disabled") return;

    if (cmd === "test") {
        message.channel.sendMessage("Active");
        return;
    }

    if (CommandsFile.commands.Disable.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        console.log("disable")
        ModOnOff.Off(ComData, message);
        return;
    }

    if (cmd == "weaboo" || cmd == "weeb"){
        message.reply("Has declared himself to be a weaboo! and they are proud!");
        return;
    }

    if (CommandsFile.commands.RoleID.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        ModRoleID.RoleID(message, msg);
        return;
    }

    if (CommandsFile.commands.Nominate.includes(cmd)) {
        ModNominate.nominate(message);
        return;
    }

    if (CommandsFile.commands.Discord.includes(cmd)) {
        ModDiscord.discord(message, msgl);
        return;
    }

    if (CommandsFile.commands.Help.includes(cmd)) {
        ModHelp.help(message, cmd);
        return;
    }

    if (CommandsFile.commands.Guide.includes(cmd)) {
        ModGuide.guide(message, msg);
        return;
    }

    if (CommandsFile.commands.Info.includes(cmd)) {
        ModInfo.info(message, msgl, cmd);
        return;
    }

    if (CommandsFile.commands.Quote.includes(cmd)) {
        ModQuote.quote(message, msgl);
        return;
    }

    if (CommandsFile.commands.Quote.includes(cmd)) {
        ModQuote.quote(message, msgl);
        return;
    }

    if (message.channel.id == "266645102418591745" && CommandsFile.commands.Roles.includes(cmd)){
        ModRoles.Roles(message,msgl,cmd);
        return;
    }
})


console.log("-bot: Attempting to loggin")
UnityBot.login(AuthFile.botinfo.token).catch("-bot My loggin was refused?");