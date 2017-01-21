module.exports = {On, Off};

function On(ComData,message) {
    if (ComData.Bot == "enabled") return message.channel.sendMessage("The bot is already fully functional?");
    ComData.Bot = "enabled";
    message.channel.sendMessage("**Fuctionality Restored**")
    fs.writeFile(".configure/commands.json", JSON.stringify(ComData), function (err) {
        if (err) {
            return console.log(err);
        }
    })
    return
}

function Off(ComData,message) {
    ComData.Bot = "disabled";
    message.reply("I will no longer accept any commands other than \"!activate\" and will no longer reply to any requests.\n**Disabled**")
    fs.writeFile(".configure/commands.json", JSON.stringify(ComData), function (err) {
        if (err) {
            return console.log(err);
        }
    })
    return;
}