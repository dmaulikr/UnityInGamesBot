module.exports = {intercept};

function intercept(message,ModRoles) {

    cmd = message.content.toLowerCase().substring(1).split(" ")[0];
    msgl = message.content.toLowerCase().split(" ").slice(1).join(" ").trim();

    if (message.channel.id == "266645102418591745") {
        if (cmd == "rank" && ["vikings", "samurai", "knights"].includes(msgl)) return message.reply("\">role\" Is outdated, try using \"!faction\" instead.");
        if (cmd == "rank" && ["viking", "knight"].includes(msgl)) {
            message.reply("\">role\" Is outdated but I will process this request for you! in the future please use \"!faction\"");
            if (msgl == "knight") msgl = "knight";
            if (msgl == "viking") msgl = "viking";
            ModRoles.Roles(message,msgl,cmd);
        }
        if (cmd == "platform") return message.reply("That is one of my functions, use \"!platform\" instead");
    }
}