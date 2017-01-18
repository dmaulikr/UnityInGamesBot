const Discord = require("discord.js");
var UnityBot = new Discord.Client();

console.log("-bot: Loading Auth File");
const AuthFile = require("./configure/auth.json");

var BotActive = true;

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
    msgl = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();


    if (cmd == "update" && message.author.id == "130329656476827648") {
        message.delete().then(message.channel.sendMessage("**Updating**"))
        BotActive = false;
    }
    if (cmd == "activate" && message.author.id == "130329656476827648") {
        message.channel.sendMessage("**Functions Enabled**")
        BotActive = true;
    }

    if (message.content.startsWith(">")) {
        if (BotActive === false) return;
        if (message.channel.id !== "266645102418591745") return;
        if (cmd = "rank" && ["vikings", "samurai", "knights"].includes(msg)) return message.reply("\">role\" Is outdated, try using \"!faction\" instead.");
        if (cmd = "rank" && ["viking", "knight"].includes(msg)) {
            message.reply("\">role\" Is outdated but I will process this request for you! in the future please use \"!faction\"");
            if (msgl = "knight") message.content = "!faction knight";
            if (msgl = "viking") message.content = "!faction viking";
        }
        if (cmd = "rank" && ["pc", "ps4", "xbox"].includes(msgl)) return message.reply("Have you thought about using \"!platform\" instead?");
    }

    if (!message.content.startsWith("!")) return;

    if (BotActive === false) return message.reply("Functions are currently offline (Update in progress?)");

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
            if (["raider", "raiders"].includes(msgl)) {
                message.channel.sendMessage("Raider guide\nhttp://forums-fr.ubi.com/showthread.php/107610-Hall-of-Heroes-guide-du-Hersir")
            }
            if (["kensei", "kenseis"].includes(msgl)) {
                message.channel.sendMessage("Kensei guide\nhttp://forums-fr.ubi.com/showthread.php/107417-Hall-of-Heroes-guide-du-Kensei")
            }
            if (["warden", "wardens"].includes(msgl)) {
                message.channel.sendMessage("Warden guide\nhttp://forums-fr.ubi.com/showthread.php/107354-Hall-of-Heroes-guide-de-la-Sentinelle")
            }
        }
        if (msg == "") return message.reply("No subject was provided?");
        if (["raider", "raiders"].includes(msgl)) {
            message.channel.sendMessage("__**Raider guide**__\n<http://forums.ubi.com/showthread.php/1499952>")
        }
        if (["feint", "feints", "feinting"].includes(msgl)) {
            message.channel.sendMessage("__**Feint Guide**__\n<http://forums.ubi.com/showthread.php/1504115>")
        }
        if (["warlord", "warlords"].includes(msgl)) {
            message.channel.sendMessage("__**Warlord Guide**__\n<http://forums.ubi.com/showthread.php/1546959>")
        }
        if (["dominion"].includes(msgl)) {
            message.channel.sendMessage("__**Dominion Guide**__\n<http://forums.ubi.com/showthread.php/1526800>")
        }
        if (["shugoki"].includes(msgl)) {
            message.channel.sendMessage("__**Shugoki Guide**__\n<http://forums.ubi.com/showthread.php/1534046>")
        }
        if (["kensei"].includes(msgl)) {
            message.channel.sendMessage("__**Kensei Guide**__\n<http://forums.ubi.com/showthread.php/1491253>")
        }
        if (["faction war","faction wars"].includes(msgl)) {
            message.channel.sendMessage("__**Faction wars Guide\n<http://forums.ubi.com/showthread.php/1534055>")
        }
        if (["warden","wardens"].includes(msgl)) {
            message.channel.sendMessage("__**Warden Guide**__\n**Basics** <http://forums.ubi.com/showthread.php/1487785>\n**Advanced** <http://forums.ubi.com/showthread.php/1526129>")
        }
        if (["orochi"].includes(msgl)) {
            message.channel.sendMessage("__**Orochi Guide**__\n<http://forums.ubi.com/showthread.php/1509277>")
        }
    }
    if (cmd == "info") {
        console.log("Info ran")
        if (["peacekeeper", "peacekeepers", "class peacekeeper", "class peacekeepers"].includes(msgl)) {
            message.channel.sendMessage("__**Peacekeeper**__\n**Difficulty**: Medium\n**Fighting Style** Counter Attacker\nShort Range, High Mobility\nVery fast attacks. Use dagger to cancel or confirm attacks into bleed damage and a deflect ability");
        }
        if (["conqueror", "conquerors", "class conqueror", "class conquerors"].includes(msgl)) {
            message.channel.sendMessage("__**Conqueror**__\n**Difficulty**: Medium\n**Fighting Style** Defensive\nAuto Blocking Defense Mode\nInterrupts attacks with standard block. Highly effective defensive mode and unblockable shield based attacks.");
        }
        if (["warden", "wardens", "class warden", "class wardens"].includes(msgl)) {
            message.channel.sendMessage("__**Warden**__\n**Difficulty**: Easy\n**Fighting Style** Adaptable\nStraight Forward Strategy\nUnblockable shoulder bash attacks and strong interruption abilities and throws.");
        }

        if (["orochi", "orochies", "class orochi", "class orochies"].includes(msgl)) {
            message.channel.sendMessage("__**Orochi**__\n**Difficulty**: Hard\n**Fighting Style** Assassin\nCounter Attacker\nVery fast light attacks. Can dodge into faster attacks and has deflect abilities");
        }
        if (["shugoki", "shugokis", "class shugoki", "class shugokis"].includes(msgl)) {
            message.channel.sendMessage("__**Shugoki**__\n**Difficulty**: Easy\n**Fighting Style** Disabler\nHard Hitter\nPassive uninterruptible stance. Charging heavy attacks and light attacks can't be interrupted");
        }
        if (["kensei", "kenseis", "class kensei", "class kenseis"].includes(msgl)) {
            message.channel.sendMessage("__**Kensei**__\n**Difficulty**: Medium\n**Fighting Style** Adaptable\nGood Melee Range\nHigh heavy attacks are unblockable. Has many maneuvers and attacks initate chain attacks.");
        }

        if (["berserker", "berserkers", "class berserker", "class berserkers"].includes(msgl)) {
            message.channel.sendMessage("__**Berserker**__\n**Difficulty**: Hard\n**Fighting Style** Harasser\nShort Ranged Fast Attacks\nSome attacks can hit multiple targets in a row. Charging attacks to harass opponents and a deflect ability.");
        }
        if (["warlord", "warlords", "class warlord", "class warlords"].includes(msgl)) {
            message.channel.sendMessage("__**Warlord**__\n**Difficulty**: Medium\n**Fighting Style** Counter Attacker\nShort Range\nDefensive properties on light and heavy attacks. A defensive mode and an unblockable headbutt.");
        }
        if (["raider", "raiders", "class raider", "class raiders"].includes(msgl)) {
            message.channel.sendMessage("__**Raider**__\n**Difficulty**: Easy\n**Fighting Style** Disabling\nHigh Damage Attacks\nRaider has unblockable zone attacks that it can use in all chain attacks. Stun attacks and throws. Strong, versatile throw attacks\n");
        }

        if (["change faction", "faction change", "test thing"].includes(msgl)) {
            message.channel.sendMessage("You are able to change your faction allegiance at any time but doing so during a season will disqualify you from any rewards.");
        }
        if (["knights", "the knights", "faction knights"].includes(msgl)) {
            message.channel.sendMessage("Sent by the iron legions with the object to pacify the land. Knights have acquired the taste of freedom and made ashfeld their home. They believe that the ancient ruins covering their lands were build by the great empire, the precursor of the iron legion.\n\nDisorganized for centuries, ashfeld's knights have mostly been a collection of petty warlords and bands of roving mercenary knights. The last decade however, the knights have corralled under a single banner, ofter at sword point, by Ashfeld's Blackston Legion, led by Apollyon.\n\nSo far, the Knights have managed to defend ashfeld from viking and samurai attacks. Apollyon argues that a threat of war is imminent and tells stragglers that joining her legion is the only guarantee they will hold onto their landss.");
        }
        if (["samurai", "the samurai", "faction samurai"].includes(msgl)) {
            message.channel.sendMessage("Originally from a land far away across the seas, the samurai tell a tale of an Emperor and a homeland lost to sea and fire. Nearly a millennium later, the nomadic nation has ceased its wandering and build a new empire near the reclaimed homelands of the vikings and the contested lands of the knights.\n\nHaving spent the last decades acclimating to the marshy hills known as the Myre, they flourish but remain vastly outnumbered by their neighbors. They have to rely on greater marial skill, cunning, and devotion to their culture in order to survive... For they may be the last of their kind.");
        }
        if (["vikings", "the vikings", "faction vikings"].includes(msgl)) {
            message.channel.sendMessage("The vikings vanished centuries ago, fleeing their crumbling homelands for shores unknown. Those left behind were conquered by the knights and assimilated into their cultures.\n\nThe Vikings returned in great numbers a few centuries ago. They came from far across teh sea to where they have established a new homeland. They returned for mayn reasons, but mostly to reclaim their ancient homeland in the north: Valkeinheim. Hundreds of viking clans now coexist in relative peace in the frozen tundra. To the outside observer, however, they seem to exist in a state of perpetual civil war.\n\nVikings are the undisputed masters of the sea and fresh water. When this raucous nation gathers together in massive armadas of dragon-headed ships, they are fearsome of behold and nigh unstoppable.");
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
        if (msgl === "pc") roleID = pcID, roleName = "PC";
        if (msgl === "xbox") roleID = xboxID, roleName = "Xbox";
        if (msgl === "ps4") roleID = ps4ID, roleName = "PS4";
        if (msgl === "pc" || msgl === "xbox" || msgl === "ps4") {
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
            if (["vikings", "viking"].includes(msgl)) NewFaction = VikingsID, NewName = "Vikings";
            if (["knights", "knight"].includes(msgl)) NewFaction = KnightsID, NewName = "Knights";
            if (msgl == "samurai") NewFaction = SamuraiID, NewName = "Samurai";
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