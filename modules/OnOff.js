const fs = require('fs');

module.exports = { On, Off };

function On(BotData, message) {
    if (BotData.Bot == "enabled") return message.channel.sendMessage("The bot is already fully functional?");
    BotData.Bot = "enabled";
    message.channel.sendMessage("**Fuctionality Restored**")
    fs.writeFile("./botstuff.json", JSON.stringify(BotData), function (err) {
        if (err) {
            return console.log(err);
        }
    })
    return
}

function Off(BotData, message) {
    BotData.Bot = "disabled";
    message.reply("I will no longer accept any commands other than \"!activate\" and will no longer reply to any requests.\n**Disabled**");
    return;
}