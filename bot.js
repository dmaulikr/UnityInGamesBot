const Discord = require("discord.js");
var UnityBot = new Discord.Client();

process.on("unhandledRejection", (err) => {
    console.error(`Holy Error Catch : Uncaught Promise Error: \n${err.stack}`);
});

const fs = require('fs');

console.log("-bot: Loading Config: Auth");
const AuthFile = require("./configure/auth.json");


console.log("-bot: Loading bot configuration file")
const BotConfig = require("./configure/commands.json");
console.log("-bot: Loading Commands");
const CommandsFile = require("./commands.json");
console.log("-Commands: OnOff");
const ModOnOff = require("./modules/OnOff.js");
console.log("-Commands: RoleID");
const ModRoleID = require("./modules/RoleID.js");
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
console.log("-Commands: Joke Banme");
const ModBanme = require("./modules/BanMe.js");
console.log("-Commands: Mute");
const ModMute = require("./modules/Mute.js");
console.log("-Commands: SlowMode");
const ModSlow = require("./modfunctions/slowmode.js");
console.log("-Commands: Config");
const ModConfig = require("./modfunctions/configure.js");
console.log("-Commands: Flag");
const ModFlag = require("./modules/flag.js");
console.log("-Commands: Check");
const ModCheck = require("./modules/Check.js");

console.log("-Commands: Loading database")
const BotData = require("./botstuff.json");

console.log("-bot: Loading Intercept");
const ModIntercept = require("./modules/Intercept.js");

Muted = [];
AClasses = ["Kensei", "Nobushi", "Orochi", "Shugoki", "Conqueror", "Lawbringer", "Peacekeeper", "warden", "Berserker", "Raider", "Valkyrie", "Warlord"]
WoWList = ["http://cdn.spectator.co.uk/content/uploads/2015/10/HiRes1.jpg", "http://pickeringmethodistchurch.co.uk/wp-content/uploads/2016/02/wow.png", "http://test.wowaustralia.com.au/wp-content/uploads/2015/05/WOW-Logo-no-text-e1430265147670.jpg", "https://img.clipartfest.com/2f064532a97611c71623195419246919_1000-images-about-wow-on-wow-clipart-png_1416-1016.png", "http://images.clipartpanda.com/wow-clipart-31b68895e9684907b5343983052f81d9_p_400.png", "http://community.ebay.com/ebay01/attachments/ebay01/21000000013/29750/1/5200088796_wow1.png", "http://pjnicholson.com/adobe_illistrator/wow7.gif", "https://cdn.pixabay.com/photo/2016/04/01/14/54/wow-1300898_960_720.png", "http://images.clipartpanda.com/insanity-clipart-wow_T.png", "https://cdn.pixabay.com/photo/2014/07/27/12/43/wow-402916_960_720.jpg", "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAABYAAAAJDMzMGMxZTU4LTRmMjMtNDQxOS04MzAwLTU3N2U4NzI2ZTI4NA.jpg", "https://cdn.pixabay.com/photo/2016/04/01/21/44/wow-1301673_960_720.png", "http://berkonomics.com/wp-content/uploads/2015/12/Wow.jpg", "http://files.leagueathletics.com/Images/Club/5093/More%20WOW.jpg", "http://images.clipartpanda.com/wow-clipart-wow_rt_purple.png", "https://img.clipartfest.com/4486ac03f19099bdaa7d22c430adfb90_wow20clipart-wow-clipart-images_500-389.png", "https://cdn.discordapp.com/attachments/216658466490679310/277511651467460608/unknown.png"]

UnityBot.on('ready', () => {
});

UnityBot.on("message", function (message) {

    if (message.author.bot) return;

    //if (message.content.toLocaleLowerCase().split(" ").includes("sonic")) return message.delete();

    if (!message.guild)return message.reply("If you need help with commands, please ask in the sever! my commands are disabled here.");

    cmd = message.content.toLowerCase().substring(1).split(" ")[0];

    //   if (message.content.toLowerCase().split(" ").includes("kensei")) return message.channel.sendMessage("<@103637255851098112>");
    //    if (message.content.toLowerCase().split(" ").includes("sonic") && message.author.id === "130329656476827648") return message.channel.sendMessage(message.content);
    //    if (message.content.toLowerCase().split(" ").includes("test123")){
    //       message.delete();
    //       message.channel.sendMessage(`${message.content}`);
    //        return
    //   }

    if (!message.guild.members.get("130329656476827648") && message.content.startsWith(BotConfig.Prefix)){
        ModCheck.Check(BotData, message);
        return;
    }

    if (message.content.startsWith(BotConfig.Prefix) && CommandsFile.commands.Mute.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        if (!message.mentions.users.first()) return;
        mentioned = message.mentions.users.first();
        if (mentioned.id === "191949398547103745" && message.author.id !== "130329656476827648") return;
        if (mentioned == undefined) return message.reply("Could not find target?");
        if (mentioned == null) return message.reply("Unexpected outcome, mention = null?");
        console.log("Mention Id:" + mentioned.id)
        if (cmd == "mute" || cmd == "silence") {
            console.log("silence")
            if (Muted.includes(mentioned.id)) return message.reply("That person has already been muted?");
            console.log("adding to mute list")
            Muted.push(mentioned.id);
            console.log(Muted);
        }
        if (cmd == "unmute") {
            console.log("unmuting")
            if (Muted.includes(mentioned.id)) {
                console.log("Removing from mute");
                MutePos = Muted.indexOf(mentioned.id)
                Muted.splice(MutePos, "1");
                console.log(Muted);
            }
            else message.reply("That person isn't muted?");
        }
    }

    if (Muted.includes(message.author.id)) {
        message.delete();
        console.log("muted msg deleted");
        return;
    }

    if (cmd === "slow" || cmd === "slowmode" && message.content.startsWith(BotConfig.Prefix) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        ModSlow.StatusSlowMode(BotData, message);
        return;
    }

    if (BotData.SlowMode.Channels.includes(message.channel.id)) {
        ModSlow.slowmode(BotData, message)
    }

    if (message.content.startsWith(">")) {
        if (BotConfig.Intercept == "disabled") return;
        if (BotData.Bot == "disabled") return;

        ModIntercept.intercept(message, ModRoles)
        return;
    }

    if (!message.content.startsWith(BotConfig.Prefix)) return;
    msg = message.content.split(" ").slice(1).join(" ").trim();
    msgl = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();
    console.log(`cmd = ${cmd} msg = ${msg}`);

    if (!AuthFile.botinfo.owner === "130329656476827648") return message.channel.sendMessage("Owner Missmatch?");

    if (CommandsFile.commands.Activate.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        ModOnOff.On(BotData, message);
        return;
    }

    if (BotData.Bot == "disabled") return;

    if (CommandsFile.commands.Disable.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        console.log("disable")
        ModOnOff.Off(BotData, message);
        return;
    }

    if (cmd === "permissions" && message.author.id == AuthFile.botinfo.owner) {
        MentionMember = message.guild.member(`${message.mentions.users.first().id}`);
        message.channel.sendMessage(`${message.channel.permissionsFor(MentionMember).raw}`)
        console.log(`${message.channel.permissionsFor(MentionMember).raw}`)
    }

    if (cmd === "power") {
        message.channel.sendFile("./Images/gifs/power.gif", "power.gif", "I Have Unlimited Power!!");
    }

    if (cmd === "notlikethis") {
        message.channel.sendMessage("https://media.giphy.com/media/dCdGHgF7yFHFK/giphy.gif");
    }


    if (cmd === "forcefield" && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        message.channel.sendFile("./Images/gifs/forcefield.gif", "forcefield.gif", "Nothing you do will harm me! <@167695252373766144>");
    }

    if (cmd === "nickname" && message.author.id == AuthFile.botinfo.owner) {
        botmember = message.guild.member("248433084943433728");
        botmember.setNickname(msg);
    }

    if (cmd === "cosmic") {
        message.reply(`No`);
    }

    //if (cmd === "flag"){
    //    ModFlag.flag(BotData,message);
    //    return;
    //}

    if (cmd === "size") {
        factionQ = 0 - message.guild.roles.get("256619278273478656").members.size - message.guild.roles.get("256618627787128832").members.size - message.guild.roles.get("256619528945926145").members.size;
        if ((message.guild.memberCount + factionQ) >= ((message.guild.memberCount / 10) * 6)) {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's over 60%`)
            return;
        }
        if ((message.guild.memberCount + factionQ) >= ((message.guild.memberCount / 10) * 5)) {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's over 50%`)
            return;
        }
        if ((message.guild.memberCount + factionQ) >= ((message.guild.memberCount / 10) * 4)) {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's over 40%`)
            return;
        }
        if ((message.guild.memberCount + factionQ) >= ((message.guild.memberCount / 10) * 3)) {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's over 30%`)
            return;
        }
        if ((message.guild.memberCount + factionQ) >= ((message.guild.memberCount / 10) * 2)) {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's over 20%`)
            return;
        }
        if ((message.guild.memberCount + factionQ) >= ((message.guild.memberCount / 10) * 1)) {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's over 10%`)
            return;
        }
        else {
            message.channel.sendMessage(`The size of this server is **${message.guild.memberCount}**\nThat means that **${message.guild.memberCount + factionQ}** are factionless! That's under 10%`)
            return;
        }
    }

    if (cmd === "banme") {
        ModBanme.banme(message);
        return;
    }

    if (cmd === "mod" && msgl === "server info" && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        FKnights = message.guild.roles.get("256619278273478656").members.size;
        FVikings = message.guild.roles.get("256619528945926145").members.size;
        FSamurai = message.guild.roles.get("256618627787128832").members.size;
        factionQ = FKnights + FVikings + FSamurai;
        pcQ = message.guild.roles.get("269324174344847361").members.size;
        xboxQ = message.guild.roles.get("269324137778905088").members.size;
        ps4Q = message.guild.roles.get("269324186042892289").members.size;
        message.channel.sendMessage(`__**Server Information**__\nSize:${message.guild.memberCount}\n\n**Factions**\nKnights: ${FKnights}\nViking: ${FVikings}\nSamurai: ${FSamurai}\n\n**Total**\nIn factions: ${factionQ}\nWithout factions: ${message.guild.memberCount - factionQ}\n\n**Platforms**\nPc: ${pcQ}\nXbox: ${xboxQ}\nPs4 ${ps4Q}`)
    }


    //   if (cmd === "main") {
    //        if (message.author.id === "103637255851098112"){
    //          message.reply(`Your new main will be... Kensei!`);
    //          return;
    //      }
    //      let RNumb = Math.floor((Math.random() * AClasses.length));
    //       message.reply(`Your new main will be... ${AClasses[RNumb]}!\n\nInsert one regret for a new main!`);
    //   }

    if (cmd === "wow" && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        message.channel.sendMessage("Wow!");
        message.channel.sendMessage("Wow!");
        message.channel.sendMessage("Wow!");
    }


    if (cmd === "argue") {
        if (msg === "") return;
        message.delete();
        message.channel.send("I've got to disagree!\n" + msg);
        console.log(message.author.id + " " + msg)
    }




    if (cmd == "weaboo" || cmd == "weeb") {
        message.reply("Has declared himself to be a weaboo! and they are proud!");
        return;
    }

    if (CommandsFile.commands.RoleID.includes(cmd) && (message.author.id == AuthFile.botinfo.owner || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))) {
        ModRoleID.RoleID(message, msg);
        return;
    }

    if (cmd === "shoon") {
        message.reply("I NO WORK ON FOR HONOR!\n\nhttps://img.ifcdn.com/images/a2117bdcc627df5d27dce9e50d513da5d02ae30db0a939e16d8d59ca1803a862_1.jpg");
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

    //   if (CommandsFile.commands.Config.includes(cmd)) {
    //       console.log("Config command");
    //      ModConfig.configbot(BotData, message);
    //       return;
    //  }

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

    if (message.channel.id == "266645102418591745" && CommandsFile.commands.Roles.includes(cmd)) {
        ModRoles.Roles(message, msgl, cmd);
        return;
    }
})


console.log("-bot: Attempting to loggin")
UnityBot.login(AuthFile.botinfo.token).catch("-bot My loggin was refused?");