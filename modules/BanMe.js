module.exports = {banme};

function banme(message) {
    message.channel.overwritePermissions(message.author, {
        SEND_MESSAGES: false
    });
    message.author.sendMessage("So you want to play a game hmm?");
    setTimeout(func1, 5000, (message));
}

function func1(message) {
    message.author.sendMessage("Sure seems like you want to play with fire boy!");
    setTimeout(func2, 5000, (message));
}

function func2(message) {
    message.author.sendMessage("How does it feel to be stuck?");
    setTimeout(func3, 2000, (message));
}

function func3(message) {
    message.author.sendMessage("Trapped?");
    setTimeout(func4, 2000, (message));
}

function func4(message) {
    message.author.sendMessage("Helpless!!");
    setTimeout(func5, 5000, (message));
}

function func5(message) {
    message.author.sendMessage("Maybe you should be careful for what you wish for!!");
    setTimeout(func6, 5000, (message));
}

function func6(message) {
    message.author.sendMessage("Your ban will happen in 10 seconds! Enjoy your friends for the little time you have left");
    setTimeout(func7, 10000, (message));
}

function func7(message) {
    message.author.sendMessage(`**Banning** <@${message.author.id}>`);
    setTimeout(func8, 5000, (message));
}

function func8(message) {
    message.author.sendMessage(`I will restory your permission to talk now.`);
    setTimeout(enableperson, 1000, (message));
}

function enableperson(message) {
    message.author.sendMessage(`Should be restored! if you have an issues, dm JJ.`);
    console.log("Restoring " + message.author.username);
    message.channel.overwritePermissions(message.author, {
        SEND_MESSAGES: true
    });
    console.log("Restored")
}