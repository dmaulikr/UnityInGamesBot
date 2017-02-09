const fs = require('fs');

module.exports = {Check};

function Check(BotData, message) {
    BotData.Bot = "disabled";
    message.reply("I will no longer accept any commands other than \"!activate\" and will no longer reply to any requests.\n**Disabled**")
    fs.writeFile("./botstuff.json", JSON.stringify(BotData), function (err) {
        if (err) {
            return console.log(err);
        }
    })
    return;
}