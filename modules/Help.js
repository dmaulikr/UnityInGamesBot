function help(message,cmd){
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
}