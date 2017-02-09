const fs = require('fs');

module.exports = {Check};

function Check(BotData, message) {
    BotData.Bot = "disabled";
    message.reply("Error 001 : Unauthorised use - Mods informed.")
    fs.writeFile("./botstuff.json", JSON.stringify(BotData), function (err) {
        if (err) {
            return console.log(err);
        }
    })
    return;
}