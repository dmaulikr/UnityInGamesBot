module.exports = {nominate};

console.log("-Nominate: Loading Nomination Data")
const NomData = require("../configure/nomination.json");

function nominate(message) {
    message.reply("This is currently disabled");
    return;
    nominee = message.guild.member(message.mentions.users.first())
    if (NomData.FactionLock == "true") {
        let SameFact = false
        if (!message.member.roles.has("256619278273478656") && !message.member.roles.has("256618627787128832") & !message.member.roles.has("256619528945926145")); {
            message.reply("You require a faction to vote!")
            return;
        }
        if (message.member.roles.has("256619278273478656") && nominee.roles.has("256619278273478656")) SameFact = true;
        if (message.member.roles.has("256618627787128832") && nominee.roles.has("256618627787128832")) SameFact = true;
        if (message.member.roles.has("256619528945926145") && nominee.roles.has("256619528945926145")) SameFact = true;
        if (SameFact = false) return message.reply("You can only nominate people in your faction.");
    }
    if (!NomData.Database.includes(nominee)) {

        message.channel.sendMessage(`${nominee.name} has been nominated by <@${message.member.id}>`)
    }
}