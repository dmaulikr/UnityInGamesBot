module.exports = { guide };

function guide(message, msg) {

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
    if (["feint", "feints", "feinting"].includes(msgl)) {
        message.channel.sendMessage("__**Feint Guide**__\n<http://forums.ubi.com/showthread.php/1504115>")
        return;
    }
    if (["faction war", "faction wars"].includes(msgl)) {
        message.channel.sendMessage("__**Faction wars Guide\n<http://forums.ubi.com/showthread.php/1534055>")
        return;
    }
    if (["dominion"].includes(msgl)) {
        message.channel.sendMessage("__**Dominion Guide**__\n<http://forums.ubi.com/showthread.php/1526800>")
        return;
    }
    if (["warlord", "warlords"].includes(msgl)) {
        message.channel.sendMessage("__**Warlord Guide**__\n<http://forums.ubi.com/showthread.php/1546959>")
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
    if (["warden", "wardens"].includes(msgl)) {
        message.channel.sendMessage("__**Warden Guide**__\n**Basics** <http://forums.ubi.com/showthread.php/1487785>\n**Advanced** <http://forums.ubi.com/showthread.php/1526129>")
        return;
    }
    if (["orochi"].includes(msgl)) {
        message.channel.sendMessage("__**Orochi Guide**__\n<http://forums.ubi.com/showthread.php/1509277>")
        return;
    }
    if (["berserker", "berserkers"].includes(msgl)) {
        message.channel.sendMessage("__**Berserker Guide**__\n<http://forums.ubi.com/showthread.php/1551940>")
        return;
    }
    if (["peacekeeper", "peacekeepers"].includes(msgl)) {
        message.channel.sendMessage("__**Peacekeeper Guide**__\n<http://forums.ubi.com/showthread.php/1563540>")
        return;
    }
    if (["raider", "raiders"].includes(msgl)) {
        message.channel.sendMessage("__**Raider guide**__\n<http://forums.ubi.com/showthread.php/1499952>")
        return;
    }
    if (["nobushi", "nobushis"].includes(msgl)) {
        message.channel.sendMessage("__**Nobushi Guide**__\n<http://forums.ubi.com/showthread.php/1554267>")
        return;
    }
}