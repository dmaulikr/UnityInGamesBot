const Discord = require("discord.js");
var UnityBot = new Discord.Client();

console.log("-bot: Loading Auth File");
const AuthFile = require("./configure/auth.json");

var BotActive = true;
var BotDisabled = false;

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

    if (message.content.startsWith(">")) {
        if (BotActive === false) return;
        if (BotDisabled == true) return;
        if (message.channel.id !== "266645102418591745") return;

        cmd = message.content.toLowerCase().substring(1).split(" ")[0];
        msgl = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();

        if (cmd = "rank" && ["vikings", "samurai", "knights"].includes(msgl)) return message.reply("\">role\" Is outdated, try using \"!faction\" instead.");
        if (cmd = "rank" && ["viking", "knight"].includes(msgl)) {
            message.reply("\">role\" Is outdated but I will process this request for you! in the future please use \"!faction\"");
            if (msgl == "knight") message.content = "!faction knight";
            if (msgl == "viking") message.content = "!faction viking";
        }
    }

    if (!message.content.startsWith("!")) return;

    cmd = message.content.toLowerCase().substring(1).split(" ")[0];
    msg = message.content.split(" ").slice(1).join(" ").trim();
    msgl = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();
    console.log(`cmd = ${cmd}`);
    console.log(`Msg = "${msg}"`);
    console.log(`msgl = ${msgl}`);

    if (cmd == "activate" || cmd == "enable" && message.author.id == "130329656476827648" || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360")) {
        message.channel.sendMessage("**Fuctionality Restored**")
        BotActive = true;
        BotDisabled = true;
        return;
    }

    if (BotDisabled == true) return;

    if (cmd == "update" && BotActive == false && message.author.id == "130329656476827648") {
        message.reply("The bot is already updating.")
        return;
    }

    if (BotActive === false) return message.reply("Functions are currently offline (Update in progress?)");

    if (cmd == "disable" && message.author.id == "130329656476827648" || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360")) {
        BotDisabled = true;
        message.reply("I will no longer accept any commands other than \"!activate\" and will no longer reply to any requests.\n**Disabled**")
        return;
    }

    if (cmd == "update" && message.author.id == "130329656476827648") {
        message.delete().then(message.channel.sendMessage("**Updating**"))
        BotActive = false;
        return;
    }

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

    if (cmd === "test") {
        message.channel.sendMessage("Active");
        return;
    }

    //French Help
    if (cmd === "aide") {
        if (message.channel.id == "254691230569463809") {
            message.reply("Vous cherchez des infos , utilisez \"!info....\"\nVous cherchez un guide , utilisez  \"!guide....\"")
            return;
        }
    }
    if (cmd === "help") {
        // General
        if (message.channel.id == "210607081303048204") {
            message.reply("\nI don't have any advice for you at this time...");
            return;
        }
        // For_Honor
        if (message.channel.id == "216658466490679310") {
            message.reply("\nIf you're looking for information, use \"!info ...\".\nIf you are looking for a guide, use\"!guide ...\"");
            return;
        }
        // Fr_ForHonor
        if (message.channel.id == "254691230569463809") {
            message.reply("\nVous cherchez des infos , utilisez \"!info ...\"\nVous cherchez un guide , utilisez \"!guide ...\"");
            return;
        }
        // for_fashion
        if (message.channel.id == "226239840079970306") {
            message.reply("\nSadly I have not been programmed to understand fashion...");
            return;
        }
        // for_honor_gameplay
        if (message.channel.id == "229749590096740352") {
            message.reply("\nI guess I could do something here in the future, but not yet.");
            return;
        }
        // stream_links
        if (message.channel.id == "225916432133652480") {
            message.reply("\nIn the future you will be able to request links from me!");
            return;
        }
        // memestream
        if (message.channel.id == "267517234086150154") {
            message.reply("\nAt this time I do not contain the knowledge of meme!");
            return;
        }
        // song_requests
        if (message.channel.id == "241734961613373441") {
            message.reply("\nMy music capabilities are disabled but when they are turned on, I will be the best music bot!");
            return;
        }
        // bot_commands
        if (message.channel.id == "241734961613373441") {
            message.reply("\nIf you're in here you shouldn't need help...");
            return;
        }
        // FactionChannel
        if (message.channel.id == "266645102418591745") {
            message.reply("\nIf you want to join a faction, use \"!faction ...\".\nIf you want to select your platform, use \"!platform ...\".");
            return;
        }
        // FactionChannel
        if (message.channel.id == "240908295945191424") {
            message.reply("\nTo disable the bot use \"!disable\", to enable use \"!enable\"");
            return;
        }
    }

    if (cmd == "guide" || cmd == "guides") {
        if (message.channel.id == "254691230569463809") {
            if (msg == "") return message.reply("sujet?");
            if (["raider", "raiders"].includes(msgl)) {
                message.channel.sendMessage("Raider guide\nhttp://forums-fr.ubi.com/showthread.php/107610-Hall-of-Heroes-guide-du-Hersir")
                return;
            }
            if (["kensei", "kenseis"].includes(msgl)) {
                message.channel.sendMessage("Kensei guide\nhttp://forums-fr.ubi.com/showthread.php/107417-Hall-of-Heroes-guide-du-Kensei")
                return;
            }
            if (["warden", "wardens"].includes(msgl)) {
                message.channel.sendMessage("Warden guide\nhttp://forums-fr.ubi.com/showthread.php/107354-Hall-of-Heroes-guide-de-la-Sentinelle")
                return;
            }
        }
        if (msg == "") return message.reply("No subject was provided?");
        if (["raider", "raiders"].includes(msgl)) {
            message.channel.sendMessage("__**Raider guide**__\n<http://forums.ubi.com/showthread.php/1499952>")
            return;
        }
        if (["feint", "feints", "feinting"].includes(msgl)) {
            message.channel.sendMessage("__**Feint Guide**__\n<http://forums.ubi.com/showthread.php/1504115>")
            return;
        }
        if (["warlord", "warlords"].includes(msgl)) {
            message.channel.sendMessage("__**Warlord Guide**__\n<http://forums.ubi.com/showthread.php/1546959>")
            return;
        }
        if (["dominion"].includes(msgl)) {
            message.channel.sendMessage("__**Dominion Guide**__\n<http://forums.ubi.com/showthread.php/1526800>")
            return;
        }
        if (["shugoki"].includes(msgl)) {
            message.channel.sendMessage("__**Shugoki Guide**__\n<http://forums.ubi.com/showthread.php/1534046>")
            return;
        }
        if (["kensei"].includes(msgl)) {
            message.channel.sendMessage("__**Kensei Guide**__\n<http://forums.ubi.com/showthread.php/1491253>")
            return;
        }
        if (["faction war", "faction wars"].includes(msgl)) {
            message.channel.sendMessage("__**Faction wars Guide\n<http://forums.ubi.com/showthread.php/1534055>")
            return;
        }
        if (["warden", "wardens"].includes(msgl)) {
            message.channel.sendMessage("__**Warden Guide**__\n**Basics** <http://forums.ubi.com/showthread.php/1487785>\n**Advanced** <http://forums.ubi.com/showthread.php/1526129>")
            return;
        }
        if (["orochi"].includes(msgl)) {
            message.channel.sendMessage("__**Orochi Guide**__\n<http://forums.ubi.com/showthread.php/1509277>")
            return;
        }
    }
    if (cmd == "glossary") {
        message.reply("Thanks to HandheldBrando for this data!\n(Art of Battle, Bleed, Block, Chain/Combo, Chain/Combo finisher, Counter Guardbreak, Dash/Dodge, Dash/Dodge attacks, Deflect, Displacement, Exhausted/Exhaustion, Feints/Cancels, Guard Stance, Guardbreak, Guardbreak throw, Heavy attack, Light attack, Perfect Defence, Unblockable, Uninterruptible status, Hyper Armour, Super Armour, Dazed, Wall Stun, Superior Block, Chip damage/block damage, Command Grab, Poke, Safe, Punish, Priority, Reading, Recovery, Neutral, Neutral stance, Whiff, Zoning, Tracking, Weapon effects)")
    }
    if (cmd == "info") {
        if (msgl == "art of battle") {
            message.channel.sendMessage("**Art of Battle:**\nThe combat system unique to For Honor. It incorporates 3 stances to both attack and defends on.");
            return;
        }
        if (msgl == "bleed") {
            message.channel.sendMessage("**Bleed:**\nDamage over time effect.");
            return;
        }
        if (msgl == "block") {
            message.channel.sendMessage("**Block:**\nTo prevent your enemy from successfully hitting you.\nBlocking a light attack will stop a chain/combo (Aka Superior Block)\nBlocking a heavy attack will not stop the enemy from chain/combo attacks (unless the hero possesses Superior Block) and will also result in a very small amount of block damage/chip damage.");
            return;
        }
        if (msgl == "Chain/Combo") {
            message.channel.sendMessage("**Chain/Combo:**\nAttacks that link directly into other attacks and allow you to perform unique attacks or abilities when done in a specific order.");
            return;
        }
        if (msgl == "Chain/Combo finisher") {
            message.channel.sendMessage("**Chain/Combo finisher:**\nAttacks that usually end a chain/combo. Some combo/chain finishers will do extra damage.");
            return;
        }
        if (msgl == "Counter Guardbreak") {
            message.channel.sendMessage("**Counter Guardbreak:**\nUsing your own guard break to prevent the enemy from guard breaking you. This is done by pressing the guard breaks within a specific window during the enemies guard break animation.");
            return;
        }
        if (msgl == "dash" || msgl == "dodge" || msgl == "dash/dodge") {
            message.channel.sendMessage("**Dash/Dodge:**\nTo evade an attack or to lunge in a direction.\nUsually done to avoid an attack or to close the gap between you and your opponent.");
            return;
        }
        if (msgl == "dash attack" || msgl == "dodge attack" || msgl == "dash/dodge attack") {
            message.channel.sendMessage("**Dash/Dodge attacks:**\nAttacks that are initiated when dashing/dodging (I.E Orochi dashing side attacks or Kensei dashing forward light attack)");
            return;
        }
        if (msgl == "deflect") {
            message.channel.sendMessage("**Deflect:**\nDeflect is a unique mechanic given to the Assassin heroes which allows them to prevent damage from an enemy attack and retaliate in some way. Each deflect follow up is unique to the character performing it.\nThis is done by dashing/dodging into an attack at the same time you would parry an attack. You do not need your guard in the same direction as an attack to successfully deflect.");
            return;
        }
        if (msgl == "displacement") {
            message.channel.sendMessage("**Displacement:**\nAn attack or ability which repositions the enemy character or creates space between you and your opponent.");
            return;
        }
        if (msgl == "guard stance") {
            message.channel.sendMessage("**Guard Stance:**\nEvery character (except assassins) have a static guard stance which is done by locking onto the opponent. In the guard stance, you have 3 different stances (top stance, left stance and right stance). You use these 3 stances to determine which side you will block and attack on.\n\nExample, If an opponent attacks your left side then you will want to be in the left stance to block them. If your opponents stance is in the top stance then you want to attack him on the left or right stance.\nAssassins are different, they have a Neutral stance because they do not have a static block and can only block for short durations. After that duration, they go back to a neutral stance.");
            return;
        }
        if (msgl == "exhausted" || msgl == "exhaustion" || msgl == "exhausted/exhaustion") {
            message.channel.sendMessage("**Exhausted/Exhaustion:**\nWhen you run out of stamina.");
            return;
        }
        if (msgl == "feints" || msgl == "cancels" || msgl == "feints/cancels" || msgl == "feint" || msgl == "cancel") {
            message.channel.sendMessage("**Feints/Cancels:**\nFeints: Feints are done by pressing the Feint button and this is characterized by outright canceling the attack and going back into a neutral stance.\nCancels: This is where things get tricky. A cancel is a feint except it does not require you to press the feint button and instead, it will always lead to a specific action afterward (I.E Raider heavy attack then pressing the light attack button to cancel into Pommel strike). ");
            return;
        }
        if (msgl == "guardbreak") {
            message.channel.sendMessage("**GuardBreak:**\nThe act of grabbing your opponent and temporarily disabling his defences.");
            return;
        }
        if (msgl == "guardbreak throw") {
            message.channel.sendMessage("**GuardBreak throw:**\nGuardBreak throws are initiated by successfully landing a GuardBreak and then pressing the GuardBreak button again while pressing one of the movement directions to throw your opponent in that direction (this can lead to Wall stuns/Environmental kills).");
            return;
        }
        if (msgl == "heavy attack") {
            message.channel.sendMessage("**Heavy attack:**\nHard hitting but slow attacks. If blocked staggers the opponent (unless they possess Superior Block) and allows you to continue your chain");
            return;
        }
        if (msgl == "light attack") {
            message.channel.sendMessage("**Light attack:**\nAttacks that are meant to be quick and do small amounts of damage but if it is blocked then you are staggered briefly and can no longer continue a chain.");
            return;
        }
        if (msgl == "perfect defence" || msgl == "perfect defense") {
            message.channel.sendMessage("**Perfect Defence:** Omni-directional block (blocking all sides simultaneously) that constantly drains Stamina while preventing the user from counter guard breaking. Unique to Conqueror and Warlord.");
            return;
        }
        if (msgl == "unblockable") {
            message.channel.sendMessage("**Unblockable:**\nVery powerful attacks that are usually very slow.They cannot be blocked through normal means and must be parried or dodged. Some abilities also have the unblockable status (I.E Raider sprinting grab/Warden Shoulder charge) and these abilities have to be dodged as there is no way to block abilities.");
            return;
        }
        if (msgl == "Uninterruptible status" || msgl == "uninterruptible") {
            message.channel.sendMessage("**Uninterruptible status:**\nThis has 2 subtypes. Hyper armor and Super armor. Uninterruptible does not mean you do not take damage it only means your animation cannot be interrupted by attacks.");
            return;
        }
        if (msgl == "hyper armour" || msgl == "hyper armor") {
            message.channel.sendMessage("**Hyper Armor:**\nCan withstand multiple hits without being interrupted (I.E Kensei would have hyper armor on a side heavy chain finisher). There are exceptions to this rule as some specific attacks and abilities will forcibly bypass uninterruptible status(I.E Orochi Storm Rush/Raider sprinting grab/Warden shoulder Charge)");
            return;
        }
        if (msgl == "super armour" || msgl == "super armor") {
            message.channel.sendMessage("**Super Armor:**\nCan only withstand 1 attack without being interrupted (I.E Shugoki has passive super armor and loses it on being hit).");
            return;
        }
        if (msgl == "dazed" || msgl == "daze") {
            message.channel.sendMessage("**Dazed:**\nAttacks and abilities that cause the dazed status cause your screen to flash white and they temporarily lose your HUD which makes it more difficult to block a follow-up attack.");
            return;
        }
        if (msgl == "wall stun") {
            message.channel.sendMessage("**Wall Stun:**\nThis effect requires you to throw an opponent into a wall using the GuardBreak throw ability (or other specific abilities). The Wall Stun temporarily staggers your opponent against the wall for a long period of time. Usually enough for someone to capitalize with a powerful attack. ");
            return;
        }
        if (msgl == "superior") {
            message.channel.sendMessage("**Superior Block:**\nYour character's block stops all attacks from being able to chain into other attacks. This will not block unblockable attacks.");
            return;
        }
        if (msgl == "chip damage" || msgl == "block damage" || msgl == "chip damage/block damage") {
            message.channel.sendMessage("**Chip Damage/block damage:**\nDamage you take when you block a heavy attack.");
            return;
        }
        if (msgl == "command grab") {
            message.channel.sendMessage("**Command Grab:**\nA command a player can input with certain characters that moves/damages another player without them being able to defend against or react if hit. These moves are usually unblockable.");
            return;
        }
        if (msgl == "poke") {
            message.channel.sendMessage("**Poke:** A generally quick attack that's used at your character's maximum range too; Create distance between two players; Stuff an opponent's current attack (Or counter poke); or deal \"Safe\" damage");
            return;
        }
        if (msgl == "safe") {
            message.channel.sendMessage("**Safe:** Attacks that are considered safe usually don't have long recovery times, meaning you can take actions very soon after the animation completes. Attacks that are \"Unsafe\" usually have long recovery times and leave you very open to attacks.");
            return;
        }
        if (msgl == "punish") {
            message.channel.sendMessage("**Punish:**\nAttacking an opponent who is in a recovery animation from performing an attack or whiffing an attack.");
            return;
        }
        if (msgl == "priority" || msgl == "priority low" || msgl == "priority medium" || msgl == "piority high" || msgl == "priority(high/medium/low)") {
            message.channel.sendMessage("**Priority(High/Medium/Low):**\nAttacks that can outright beat other attacks or actions being performed by another character. Example: A character who's in the middle of a light attack will always take priority over a character trying to guard break.");
            return;
        }
        if (msgl == "read" || msgl == "reading") {
            message.channel.sendMessage("**Read/Reading:**\nReading is when you understand your opponent's playstyle and patterns so you're better able to guess their next move, and counter it.");
            return;
        }
        if (msgl == "recovery") {
            message.channel.sendMessage("**Recovery:**\nThe time it takes for you to recover from the animation so you can take another.");
            return;
        }
        if (msgl == "neutral") {
            message.channel.sendMessage("**Neutral:**\nThe part of a fight in which no one fighter is taking definitive actions against the other. It's generally referred to as \"feeling out\" the fight.");
            return;
        }
        if (msgl == "neutral stance") {
            message.channel.sendMessage("**Neutral stance:**\nThis is unique to assassin heroes and is the stance they ");
            return;
        }
        if (msgl == "whiff") {
            message.channel.sendMessage("**Whiff:**\nA move that misses completely. Can be intentional to bait an opponent into a chain that doesn't require a hit.");
            return;
        }
        if (msgl == "zoning") {
            message.channel.sendMessage("**Zoning:**\nA tactic, usually used by characters with weapons with more range than their opponents to keep them at bay, and also to take higher priority with their attacks. Example: A Kensei keeping distance from a Warden by Poking, and using his range to his advantage.");
            return;
        }
        if (msgl == "tracking") {
            message.channel.sendMessage("**Tracking:** Attacks that \"follow\" the opponents movement. Attacks with tracking must be dodged at the correct time otherwise, they will still hit you.\nExample: Orochi's Hurricane Blast will track and move along with opponents, making it harder to side-step, or back away from.");
            return;
        }
        if (msgl == "weapon effects") {
            message.channel.sendMessage("**Weapon effects:**\nThese are colors used to indicate what each attack does or can do.\n\n**Blue** means the attack can be chained into another attack\n**Yellow** means the attack is a counter attack or has the block property (I.E Crushing counter or Warlord counter light attacks)\n**Orange and fiery** means the attack or ability is unblockable.\n**Purple** means that the attack will apply the bleed effect.");
            return;
        }
        if (["peacekeeper", "peacekeepers", "class peacekeeper", "class peacekeepers"].includes(msgl)) {
            message.channel.sendMessage("__**Peacekeeper**__\n**Difficulty**: Medium\n**Fighting Style** Counter Attacker\nShort Range, High Mobility\nVery fast attacks. Use dagger to cancel or confirm attacks into bleed damage and a deflect ability");
            return;
        }
        if (["conqueror", "conquerors", "class conqueror", "class conquerors"].includes(msgl)) {
            message.channel.sendMessage("__**Conqueror**__\n**Difficulty**: Medium\n**Fighting Style** Defensive\nAuto Blocking Defense Mode\nInterrupts attacks with standard block. Highly effective defensive mode and unblockable shield based attacks.");
            return;
        }
        if (["warden", "wardens", "class warden", "class wardens"].includes(msgl)) {
            message.channel.sendMessage("__**Warden**__\n**Difficulty**: Easy\n**Fighting Style** Adaptable\nStraight Forward Strategy\nUnblockable shoulder bash attacks and strong interruption abilities and throws.");
            return;
        }

        if (["orochi", "orochies", "class orochi", "class orochies"].includes(msgl)) {
            message.channel.sendMessage("__**Orochi**__\n**Difficulty**: Hard\n**Fighting Style** Assassin\nCounter Attacker\nVery fast light attacks. Can dodge into faster attacks and has deflect abilities");
            return;
        }
        if (["shugoki", "shugokis", "class shugoki", "class shugokis"].includes(msgl)) {
            message.channel.sendMessage("__**Shugoki**__\n**Difficulty**: Easy\n**Fighting Style** Disabler\nHard Hitter\nPassive uninterruptible stance. Charging heavy attacks and light attacks can't be interrupted");
            return;
        }
        if (["kensei", "kenseis", "class kensei", "class kenseis"].includes(msgl)) {
            message.channel.sendMessage("__**Kensei**__\n**Difficulty**: Medium\n**Fighting Style** Adaptable\nGood Melee Range\nHigh heavy attacks are unblockable. Has many maneuvers and attacks initate chain attacks.");
            return;
        }

        if (["berserker", "berserkers", "class berserker", "class berserkers"].includes(msgl)) {
            message.channel.sendMessage("__**Berserker**__\n**Difficulty**: Hard\n**Fighting Style** Harasser\nShort Ranged Fast Attacks\nSome attacks can hit multiple targets in a row. Charging attacks to harass opponents and a deflect ability.");
            return;
        }
        if (["warlord", "warlords", "class warlord", "class warlords"].includes(msgl)) {
            message.channel.sendMessage("__**Warlord**__\n**Difficulty**: Medium\n**Fighting Style** Counter Attacker\nShort Range\nDefensive properties on light and heavy attacks. A defensive mode and an unblockable headbutt.");
            return;
        }
        if (["raider", "raiders", "class raider", "class raiders"].includes(msgl)) {
            message.channel.sendMessage("__**Raider**__\n**Difficulty**: Easy\n**Fighting Style** Disabling\nHigh Damage Attacks\nRaider has unblockable zone attacks that it can use in all chain attacks. Stun attacks and throws. Strong, versatile throw attacks\n");
            return;
        }

        if (["change faction", "faction change", "test thing"].includes(msgl)) {
            message.channel.sendMessage("You are able to change your faction allegiance at any time but doing so during a season will disqualify you from any rewards.");
            return;
        }
        if (["knights", "the knights", "faction knights"].includes(msgl)) {
            message.channel.sendMessage("Sent by the iron legions with the object to pacify the land. Knights have acquired the taste of freedom and made ashfeld their home. They believe that the ancient ruins covering their lands were build by the great empire, the precursor of the iron legion.\n\nDisorganized for centuries, ashfeld's knights have mostly been a collection of petty warlords and bands of roving mercenary knights. The last decade however, the knights have corralled under a single banner, ofter at sword point, by Ashfeld's Blackston Legion, led by Apollyon.\n\nSo far, the Knights have managed to defend ashfeld from viking and samurai attacks. Apollyon argues that a threat of war is imminent and tells stragglers that joining her legion is the only guarantee they will hold onto their landss.");
            return;
        }
        if (["samurai", "the samurai", "faction samurai"].includes(msgl)) {
            message.channel.sendMessage("Originally from a land far away across the seas, the samurai tell a tale of an Emperor and a homeland lost to sea and fire. Nearly a millennium later, the nomadic nation has ceased its wandering and build a new empire near the reclaimed homelands of the vikings and the contested lands of the knights.\n\nHaving spent the last decades acclimating to the marshy hills known as the Myre, they flourish but remain vastly outnumbered by their neighbors. They have to rely on greater marial skill, cunning, and devotion to their culture in order to survive... For they may be the last of their kind.");
            return;
        }
        if (["vikings", "the vikings", "faction vikings"].includes(msgl)) {
            message.channel.sendMessage("The vikings vanished centuries ago, fleeing their crumbling homelands for shores unknown. Those left behind were conquered by the knights and assimilated into their cultures.\n\nThe Vikings returned in great numbers a few centuries ago. They came from far across teh sea to where they have established a new homeland. They returned for mayn reasons, but mostly to reclaim their ancient homeland in the north: Valkeinheim. Hundreds of viking clans now coexist in relative peace in the frozen tundra. To the outside observer, however, they seem to exist in a state of perpetual civil war.\n\nVikings are the undisputed masters of the sea and fresh water. When this raucous nation gathers together in massive armadas of dragon-headed ships, they are fearsome of behold and nigh unstoppable.");
            return;
        }
        if (msg === "losers") {
            message.channel.sendMessage("There are no losers if you fight with honor!");
            return;
        }
    }

    if (cmd === "knights" || cmd === "knight") {
        let RNumb = Math.floor((Math.random() * QuoteKnights.length));
        message.channel.sendMessage(QuoteKnights[RNumb]);
        return;
    }
    if (cmd === "samurai") {
        let RNumb = Math.floor((Math.random() * QuoteSamurai.length));
        message.channel.sendMessage(QuoteSamurai[RNumb]);
        console.log(RNumb);
        return;
    }
    if (cmd === "viking" || cmd === "vikings") {
        let RNumb = Math.floor((Math.random() * QuoteVikings.length));
        message.channel.sendMessage(QuoteVikings[RNumb]);
        return;
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
                return;
            }
            else {
                message.guild.member(message.author.id).addRole(roleID);
                message.reply(`Added ${roleName}`);
                return;
            }
        }
        else {
            message.reply("That platform wasn't found? Available platforms are (PC, PS4, Xbox)");
            return;
        }
    }

    //    if (cmd == "assign" && message.author.id == "130329656476827648" || message.member.roles.has("210613821134471168") || message.member.roles.has("210614245589647360"))
    //    {
    //        MSplit = msg.split(" ");
    //        message.guild.member(message.mentions.users.first()).addRole(MSplit[1]);
    //        message.reply(`Role ${MSplit[1]} given to ${MSplit[0]}`);
    //    }
    //    if (cmd == "remove" && message.author.id == "130329656476827648")
    //    {
    //        MSplit = msg.split(" ");
    //       message.guild.member(message.mentions.users.first()).removeRole(MSplit[1]);
    //       message.reply(`Role ${MSplit[1]} removed from ${MSplit[0]}`);
    //    }

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
            return;
        }
        else {
            message.reply("you need to request one of the three factions (Vikings, Knights, Samurai)")
            return;
        }
    }
})


console.log("-bot: Attempting to loggin")
UnityBot.login(AuthFile.botinfo.token).catch("-bot My loggin was refused?");