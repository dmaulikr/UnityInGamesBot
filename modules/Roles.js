module.exports = {Roles};

function Roles(message,msgl,cmd){
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


    if (cmd === "faction") {
        let KnightsID = "256619278273478656";
        let SamuraiID = "256618627787128832";
        let VikingsID = "256619528945926145";
        if (["vikings", "viking", "samurai", "knights", "knight"].includes(msgl)) {
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

            if (CurFaction === null) return message.reply(`Joined faction **${NewName}**.`);

            message.reply(`Joined the **${NewName}** and left the **${CurFaction}**.`);
            return;
        }
        else {
            message.reply("you need to request one of the three factions (Vikings, Knights, Samurai)")
            return;
        }
    }
}