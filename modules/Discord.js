module.exports = {discord};

function discord(message,msgl) {
        if (msgl == "platform" || msgl == "platforms") {
            pcQ = message.guild.roles.get("269324174344847361").members.size;
            xboxQ = message.guild.roles.get("269324137778905088").members.size;
            ps4Q = message.guild.roles.get("269324186042892289").members.size;
            message.channel.sendMessage(`Who have we got in here?\n**PC:** ${pcQ}\n**Xbox:** ${xboxQ}\n**Ps4:** ${ps4Q}`);
        }
        if (msgl == "faction" || msgl == "factions") {
            knightsQ = message.guild.roles.get("256619278273478656").members.size;
            vikingsQ = message.guild.roles.get("256619528945926145").members.size;
            samuraiQ = message.guild.roles.get("256618627787128832").members.size;
            message.channel.sendMessage(`Scouts show the faction populations are\n**Knights:** ${knightsQ}\n**Vikings:** ${vikingsQ}\n**Samurai** ${samuraiQ}`);
        }
    }