module.exports = { flag };

flagcount = 0;
voted = [];

function flag(BotData, message) {
    msg = message.content.split(" ").slice(1).join(" ").trim();
    TUser = message.guild.members.find(m => m.displayName === msg);
    if (!TUser) return message.reply("User Not Found");

    if (BotData.Flags.User.includes(TUser.id)) {
        indexis = BotData.Flags.User.indexOf(TUser.id);
        if (BotData.Flags.Voted.includes(message.author.id)) {
            let indexVoted = BotData.Flags.User.indexOf(message.author.id);
            BotData.Flags.Voted.splice(indexVoted, 1);
            BotData.Flags.Flags[indexis] -= 1;
            message.reply(`Flag has been removed from ${msg}`);
        }
        else {
            BotData.Flags.Voted[indexis].push(message.user.id);
            BotData.Flags.Flags[indexis] += 1;
            message.reply(`${msg} has ${BotData.Flags.Flags[indexis]} flags.`)
        }
    }
    else {
        BotData.Flags.User.push(TUser.id);
        indexis = BotData.Flags.User.indexOf(TUser.id);
        BotData.Flags.Voted.push(TUser.id);
        BotData.Flags.Voted[indexis].push(message.author.id);
        BotData.Flags.Flags.push(TUser.id);
        BotData.Flags.Flags[indexis].push(1);
        message.reply(`${msg} has ${BotData.Flags.Flags[indexis]} flags.`)
    }
    fs.writeFile("./botstuff.json", JSON.stringify(BotData), function (err) {
        console.log("Flag file updated")
        if (err) {
            return console.log(err);
        }
    })
}