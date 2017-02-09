console.log("-Configure: Loading configure\commands.json");
const configfile = require("../configure/commands.json");

const TheDatabase = require("../configure/database.json");

FirstTime = false;
ConfigType = "";
Stage = "";
Method = "";
Answer = "";
objective = "";

module.exports = { configbot };

function configbot(RandomData, message) {
    console.log("config pass");
    //if (message.guild.owner.id !== message.author.id) return message.reply("Only the owner can run this command.");
    if (message.author.id !== "130329656476827648") return message.reply("Only the developer can run this command.");
    if (RandomData.RanSetup === false) FirstTime = true;

    message.reply("What would you like to configure?\n**Data retrieved by commands**\n1.Guides\n2.Info\n3Quotes\n**---Unavailable Under This--*\n**Command functions**\n4.Change Prefix\n5.Enable or disable commands\n3.Change commands activation words\n4.Custom commands\n**(Owner Locked) Mod info**\n6.Add a role\n7.Add a person\n8Set mod privilages");

    if (FirstTime === true) message.reply("First time detected!\nI will no longer detect the prefix from you during configuration!\nBe careful, I will register messages that you send in this channel");

    let collector = message.channel.createCollector(m => m);
    collector.on('message', m => {
        if (message.author.bot) return;
        if (m.author.id !== message.author.id) return;
        //if (message.content.startsWith("!")) return;
        console.log("Collector message")
        cmd = m.content.toLowerCase().split(" ")[0];
        msg = m.content.split(" ").slice(1).join(" ").trim();
        msgl = m.content.toLowerCase().split(" ").slice(1).join(" ").trim();
        if (cmd === "close" || cmd === "exit") {
            stopcol();
            return
        }

        if (ConfigType === "") {
            console.log("Config what?")
            if (cmd === "guides" || cmd === "1") {
                ConfigType = "guide";
                Method = "need1";
                m.channel.sendMessage("Do you want to (1.add | 2.remove | 3.view)");
            }
            return;
        }

        if (Method === "need1") {
            console.log("need ran");
            if (cmd === "add" || cmd === "1") {
                Method = "1";
                Stage = "1";
                m.channel.sendMessage("**Adding**");
                guide(m);
                return;
            }
            if (cmd === "remove" || cmd === "2") {
                Method = "2";
                Stage = "1";
                m.channel.sendMessage("**Removing**");
                guide(m);
                return;
            }
            if (cmd === "view" || cmd === "3") {
                Method = "3";
                Stage = "1";
                m.channel.sendMessage("**Viewing**");
                guide(m);
                return;
            }
            return;
        }

        if (ConfigType === "guide") return guide(m);
    });
}

function guide(m) {
    msg = m.content.toLowerCase();
    console.log("objective = " + objective)
    if (Method === "1") {
        if (TheDatabase.guides.includes(msg)) {
            Stage = "4";
            objective = msg;
            m.channel.sendMessage(`Guide Title "${objective}"\nWhat is the link to the guide?`)
            return
        }
        if (Answer === "needed") {
            if (msg === "yes") {
                TheDatabase.guides.push(objective);
                m.channel.sendMessage(`Added: ${objective}, what is the link to the guide?`)
                console.log(TheDatabase.guides);
                Answer = "";
                Stage = "3";
                return;
            }
            if (msg === "no") {
                Answer = "";
                Stage = "1";
                m.channel.sendMessage("What is the name of the guide you want adding?")
                return;
            }
            return
        }

        if (Stage === "1") {
            m.channel.sendMessage("What is the name of the guide you want adding??");
            console.log("Stage: " + Stage)
            Stage = "2";
            return
        }
        if (Stage === "2") {
            console.log("Stage 2")
            objective = msg;
            if (!TheDatabase.guides.includes(objective)) {
                m.channel.sendMessage(`There were no guides listed for ${objective}, would you like me to add it?`)
                Answer = "needed";
                return
            }
            else {
                Stage = "3";
                m.channel.sendMessage("What is the link to the guide?");
            }
        }
        if (Stage === "3") {
            console.log(objective)
            console.log(TheDatabase.guides);
            console.log(TheDatabase.guides[objective]);
            let indexnumb = TheDatabase.guides.indexOf(objective)
            console.log(TheDatabase.guides[thenumb])
            TheDatabase.guides[indexnumb].push(m.content);
            fs.writeFile("./configure/database.json", JSON.stringify(TheDatabase), function (err) {
                if (err) {
                    return console.log(err);
                }
            })
            m.message.sendMessage(`New guide added to ${objective}`);
            stopcol();
        }
    }

    if (Method === "remove") { 
        m.reply("This isn't ready yet! :<")
    }

    if (Method === "view") {
        m.reply(`Here is a list of titles: ${TheDatabase.guides}`)
     }
}

function stopcol() {
    collector.stop();
    ConfigType = "";
    Stage = "";
    Method = "";
    Answer = "";
    objective = "";
    console.log("collector closed")
    return;
}