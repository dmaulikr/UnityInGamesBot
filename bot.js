const Discord = require("discord.js");
var UnityBot = new Discord.Client();

console.log("-bot: Loading Auth File");
const AuthFile = require("./configure/auth.json");

QuoteKnights = ["Most have been forgotten. Most deserve to be forgotten. The heroes will always be remembered. The best. The best and the worst. And a few who were a bit of both.",
    "Knighthood lies above eternity, it doesn’t live off fame, but rather deeds.",
    "A great battle is a terrible thing, but in the midst of blood and carnage, there is sometimes also beauty, beauty that could break your heart.",
    "I have seen too many men go down, and I never permit myself to forget that one day, through accident or under the charge of a younger, stronger knight, I too will go down.",
    "I'd rather have a heart of gold\nThan all the treasure of the world.",
    "All Knights must bleed. Blood is the seal of our devotion.",
    "A good swordsman is more important than a good sword.",
    "The warrior guided by the spirit serves humanity, the warrior without, serves the ego"
];

QuoteSamurai = ["You can always die. It's living that takes real courage.",
    "No matter how much you hate or how much you suffer, you can't bring the dead back to life",
    "A man who can't uphold his beliefs is pathetic dead or alive",
    "A warrior is worthless unless he rises above others and stands strong in the midst of a storm.",
    "Fast as wind, quiet as a forest, aggressive as fire and immovable as a montain.",
    "Don't fear death. Fear the un-lived life.",
    "Bowing is an expression of gratitude and respect. in effect, you are thanking your opponent for giving you the opportunity to improve your technique.",
    "Calm, but alert! Relaxed, but ready! Smooth, but sharp! humble, but confident!",
    "Those who are skilled in combat do not become angered, those who are skilled at winning do not become afraid. Thus the wise win before the fight, while the ignorant fight to win.",
    "He who conquers others is strong. He who conquers himself is mighty."
]

QuoteVikings = [
    "Lo, they do call to me.\nThey bid me take my place among them,\nIn the halls of Valhalla!\nWhere the brave may live forever!",
    "Wear your scars wtih pride...\n for a scar-less man has not felt the hardship of life or the feeling of pain.",
    "It is better to stand and fight.\n If you run, you'll only die tired.",
    "Stand up for what you believe in...\neven if you stand alone.",
    "I came into this world kicking and screaming while covered in someone else's blood. I have no problem with going out the same way.",
    "Here's to cheating, stealing, fighting and drinking!\nIf you cheat, may you cheat death!\nIf you steal, may you steal a woman's heart!\nIf you fight, may you fight for a brother!\nIf you drink, may you drink with me.",
    "Power is only given to those who are prepared to lower themselves to pick it up.",
    "I offended you?\nWhat does it feel like to be so weak that mere words hurt you?",
    "He who lives without discipline, dies without honor.",
    "Make no mistake! The beast inside is sleeping, not dead."
]

UnityBot.on("message", function (message) {

    if (message.author.bot) return;

    cmd = message.content.toLowerCase().substring(1).split(" ")[0];

    msg = message.content.split(" ").slice(1).join(" ").trim();

    if (cmd == "roleid" && message.author.id == AuthFile.botinfo.owner) {
        if (msg === undefined) {
            message.channel.sendMessage("No role specified?");
            return;
        }
        let TRole = message.guild.roles.find("name", msg);
        if (TRole === null) {
            message.channel.sendMessage("Role could not be found?");
            return;
        }
        message.channel.sendMessage(`**Role Name:** ${TRole.name} **Role ID:** ${TRole.id}`);
    }







    //Lower case
    msg = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();

    if (message.content.startsWith(">")) {
        if (message.channel.id !== "266645102418591745") return;
        if (cmd = "rank" && ["vikings", "samurai", "knights"].includes(msg)) return message.reply("\">role\" Is outdated, try using \"!faction\" instead.");
        if (cmd = "rank" && ["viking", "knight"].includes(msg)) {
            message.reply("\">role\" Is outdated but I will process this request for you! in the future please use \"!faction\"");
            if (msg = "knight") message.content = "!faction knight";
            if (msg = "viking") message.content = "!faction viking";
        }
        if (cmd = "rank" && ["pc", "ps4", "xbox"].includes(msg)) return message.reply("Have you thought about using \"!platform\" instead?");
    }

    if (!message.content.startsWith("!")) return;
    console.log(`Cmd = "${cmd}"`);
    console.log(`Msg = "${msg}"`);

    if (cmd === "test") {
        message.channel.sendMessage("Active");
    }

    //French Help
    if (cmd === "aide") {
        if (message.channel.id == "254691230569463809") {
            message.reply("Vous cherchez des infos , utilisez \"!info....\"\nVous cherchez un guide , utilisez  \"!guide....\"")
        }
    }
    if (cmd === "help") {
        // General
        if (message.channel.id == "210607081303048204") {
            message.reply("\nI don't have any advice for you at this time...");
        }
        // For_Honor
        if (message.channel.id == "216658466490679310") {
            message.reply("\nIf you're looking for information, use \"!info ...\".\nIf you are looking for a guide, use\"!guide ...\"");
        }
        // Fr_ForHonor
        if (message.channel.id == "254691230569463809") {
            message.reply("\nVous cherchez des infos , utilisez \"!info ...\"\nVous cherchez un guide , utilisez \"!guide ...\"");
        }
        // for_fashion
        if (message.channel.id == "226239840079970306") {
            message.reply("\nSadly I have not been programmed to understand fashion...");
        }
        // for_honor_gameplay
        if (message.channel.id == "229749590096740352") {
            message.reply("\nI guess I could do something here in the future, but not yet.");
        }
        // stream_links
        if (message.channel.id == "225916432133652480") {
            message.reply("\nIn the future you will be able to request links from me!");
        }
        // memestream
        if (message.channel.id == "267517234086150154") {
            message.reply("\nAt this time I do not contain the knowledge of meme!");
        }
        // song_requests
        if (message.channel.id == "241734961613373441") {
            message.reply("\nMy music capabilities are disabled but when they are turned on, I will be the best music bot!");
        }
        // bot_commands
        if (message.channel.id == "241734961613373441") {
            message.reply("\nIf you're in here you shouldn't need help...");
        }
        // FactionChannel
        if (message.channel.id == "266645102418591745") {
            message.reply("\nIf you want to join a faction, use \"!faction ...\".\nIf you want to select your platform, use \"!platform ...\".");
        }
    }

    if (cmd == "guide" || cmd == "guides") {
        if (message.channel.id == "254691230569463809") {
            if (msg == "") return message.reply("sujet?");
            if (["raider", "raiders"].includes(msg)) {
                message.channel.sendMessage("Raider guide\nhttp://forums-fr.ubi.com/showthread.php/107610-Hall-of-Heroes-guide-du-Hersir")
            }
            if (["kensei", "kenseis"].includes(msg)) {
                message.channel.sendMessage("Kensei guide\nhttp://forums-fr.ubi.com/showthread.php/107417-Hall-of-Heroes-guide-du-Kensei")
            }
            if (["warden", "wardens"].includes(msg)) {
                message.channel.sendMessage("Warden guide\nhttp://forums-fr.ubi.com/showthread.php/107354-Hall-of-Heroes-guide-de-la-Sentinelle")
            }
        }
        if (msg == "") return message.reply("No subject was provided?");
        if (["raider", "raiders"].includes(msg)) {
            message.channel.sendMessage("__**Raider guide**__\n<http://forums.ubi.com/showthread.php/1499952-Hall-of-Heroes-Raider-Guide?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["feint", "feints", "feinting"].includes(msg)) {
            message.channel.sendMessage("__**Feint Guide**__\n<http://forums.ubi.com/showthread.php/1504115-Hall-of-Heroes-s-Guide-to-Feints?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["warlord", "warlords"].includes(msg)) {
            message.channel.sendMessage("__**Warlord Guide**__\n<http://forums.ubi.com/showthread.php/1546959-Hall-of-Heroes-Warlord-Guide?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["dominion"].includes(msg)) {
            message.channel.sendMessage("__**Dominion Guide**__\n<http://forums.ubi.com/showthread.php/1526800-Hall-of-Heroes-Guide-to-Dominion?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["shugoki"].includes(msg)) {
            message.channel.sendMessage("__**Shugoki Guide**__\n<http://forums.ubi.com/showthread.php/1534046-Hall-of-Heroes-Shugoki-Basics?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["kensei"].includes(msg)) {
            message.channel.sendMessage("__**Kensei Guide**__\n<http://forums.ubi.com/showthread.php/1491253-Hall-of-Heroes-Kensei-Guide?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["faction war","faction wars"].includes(msg)) {
            message.channel.sendMessage("__**Faction wars Guide\n<http://forums.ubi.com/showthread.php/1534055-Hall-of-Heroes-Guide-to-Faction-War?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["warden","wardens"].includes(msg)) {
            message.channel.sendMessage("__**Warden Guide**__\n**Basics** <http://forums.ubi.com/showthread.php/1487785-Hall-of-Heroes-Warden-Guide?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>\n**Advanced** <http://forums.ubi.com/showthread.php/1526129-Hall-of-Heroes-Advanced-mechanics-The-Warden?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
        if (["orochi"].includes(msg)) {
            message.channel.sendMessage("__**Orochi Guide**__\n<http://forums.ubi.com/showthread.php/1509277-Hall-of-Heroes-Orochi-Guide-Updated?s=406ad7dab2f9b7ccacbc5ea1ebe0d720&highlight=Hall+of+Heroes>")
        }
    }
    if (cmd == "info") {
        console.log("Info ran")
        if (["change faction", "faction change", "test thing"].includes(msg)) {
            message.channel.sendMessage("It is possible to change your faction but if you change during a faction war it will disqualify you from any rewards.");
        }
        if (["knights", "the knights", "faction knights"].includes(msg)) {
            message.channel.sendMessage("Knights were gifted to the lands by the gods, all knights are superior in every way and only the wisest of mortals join their ranks.");
        }
        if (["samurai", "the samurai", "faction samurai"].includes(msg)) {
            message.channel.sendMessage("(Not Complete)");
        }
        if (["vikings", "the vikings", "faction vikings"].includes(msg)) {
            message.channel.sendMessage("Vikings, the ones that believe they are immortal");
        }
        if (msg === "losers") {
            message.channel.sendMessage("There are no losers if you fight with honor!");
        }
    }

    if (cmd === "knights" || cmd === "knight") {
        let RNumb = Math.floor((Math.random() * QuoteKnights.length));
        message.channel.sendMessage(QuoteKnights[RNumb]);
    }
    if (cmd === "samurai") {
        let RNumb = Math.floor((Math.random() * QuoteSamurai.length));
        message.channel.sendMessage(QuoteSamurai[RNumb]);
        console.log(RNumb);
    }
    if (cmd === "viking" || cmd === "vikings") {
        let RNumb = Math.floor((Math.random() * QuoteVikings.length));
        message.channel.sendMessage(QuoteVikings[RNumb]);
    }


    if (cmd === "platform") {
        let pcID = "269324174344847361";
        let ps4ID = "269324186042892289";
        let xboxID = "269324137778905088";
        if (msg === "pc") roleID = pcID, roleName = "PC";
        if (msg === "xbox") roleID = xboxID, roleName = "Xbox";
        if (msg === "ps4") roleID = ps4ID, roleName = "PS4";
        if (msg === "pc" || msg === "xbox" || msg === "ps4") {
            if (message.member.roles.has(roleID)) {
                message.guild.member(message.author.id).removeRole(roleID);
                message.reply(`Removed ${roleName}`);
            }
            else {
                message.guild.member(message.author.id).addRole(roleID);
                message.reply(`Added ${roleName}`);
            }
        }
        else {
            message.reply("That platform wasn't found? Available platforms are (PC, PS4, Xbox)");
        }
    }

    if (cmd == "assign" && message.author.id == "130329656476827648" || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))
    {
        MSplit = msg.split(" ");
        message.guild.member(message.mentions.users.first()).addRole(MSplit[1]);
        message.reply(`Role ${MSplit[1]} given to ${MSplit[0]}`);
    }
    if (cmd == "remove" && message.author.id == "130329656476827648")
    {
        MSplit = msg.split(" ");
        message.guild.member(message.mentions.users.first()).removeRole(MSplit[1]);
        message.reply(`Role ${MSplit[1]} removed from ${MSplit[0]}`);
    }

    //  These only work in faction channel
    if (message.channel.id !== "266645102418591745") return;
    if (cmd === "faction") {
        let KnightsID = "256619278273478656";
        let SamuraiID = "256618627787128832";
        let VikingsID = "256619528945926145";
        if (["vikings", "viking", "samurai", "knights", "knight"].includes(msg)) {
            let CurFaction = null;
            let NewFaction = null;
            let NewName = null;
            if (["vikings", "viking"].includes(msg)) NewFaction = VikingsID, NewName = "Vikings";
            if (["knights", "knight"].includes(msg)) NewFaction = KnightsID, NewName = "Knights";
            if (msg == "samurai") NewFaction = SamuraiID, NewName = "Samurai";
            if (message.member.roles.has(NewFaction)) return message.reply("Looks like somebody is having an identity crisis.");

            if (message.member.roles.has(KnightsID)) {
                message.guild.member(message.author.id).removeRole(KnightsID);
                CurFaction = "Knights";
            }
            if (message.member.roles.has(SamuraiID)) {
                message.guild.member(message.author.id).removeRole(SamuraiID);
                CurFaction = "Samurai";
            }
            if (message.member.roles.has(VikingsID)) {
                message.guild.member(message.author.id).removeRole(VikingsID);
                CurFaction = "Vikings ";
            }
            message.guild.member(message.author.id).addRole(NewFaction);

            if (CurFaction === null) return message.reply(`Joined faction ${NewName}.`);

            message.reply(`Joined the ${NewName} and left the ${CurFaction}.`);
        }
        else {
            message.reply("you need to request one of the three factions (Vikings, Knights, Samurai)")
        }
    }
})


console.log("-bot: Attempting to loggin")
UnityBot.login(AuthFile.botinfo.token).catch("-bot My loggin was refused?");