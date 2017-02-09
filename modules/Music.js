const yt = require("ytdl-core");
var queue = {};

var Selfunction = ["play","addsong","queue"]

const commands = {
    'play': (message, msg) => {
        if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`There are no songs in the queue, to add a song use: ${!}addsong`);
        if (!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message, msg));
        if (queue[message.guild.id].playing) return message.channel.sendMessage('Already Playing');
        let dispatcher;
        queue[message.guild.id].playing = true;

        (function play(song) {
            if (queue.adminlist)
            console.log(`Author = ${message.author}`);
            if (song === undefined) return message.channel.sendMessage('The queue is empty').then(() => {
                queue[message.guild.id].playing = false;
                message.member.voiceChannel.leave();
            });
            console.log("1 Message");
            message.channel.sendMessage(`Playing: **${song.title}**, requested by: **${song.requester}**`);
            console.log("2 Connect");
            dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }));
            console.log("3 Collector");
            let collector = message.channel.createCollector(m => m);
            console.log("4 Volume");
            dispatcher.setVolume(10 / 50);
            console.log("5 Complete");
            collector.on('message', m => {
                if (m.author.bot) return;
                console.log("-----New Line-----")
                if (!m.content.startsWith("-")) return console.log("Not a command");
                if (message.Textchannel.name === music_room) return;
                let cmd = m.content.toLowerCase().substring(1).split(" ")[0];
                let msg = m.content.split(" ").slice("1").join(" ");
                console.log("Msg = " + m);
                console.log("cmd = " + cmd);
                console.log("msg = " + msg);
                if (cmd === "pause") {
                    message.channel.sendMessage("paused").then(() => { dispatcher.pause(); });
                } else if (cmd === "resume") {
                    message.channel.sendMessage("resumed").then(() => { dispatcher.resume(); });
                } else if (cmd === "skip") {
                    message.channel.sendMessage("skipped").then(() => { dispatcher.end(); });
                } else if (cmd === "time") {
                    message.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000) / 1000) < 10 ? '0' + Math.floor((dispatcher.time % 60000) / 1000) : Math.floor((dispatcher.time % 60000) / 1000)}`);
                } else if (cmd === "volume") {
                    if (!msg) {
                        message.reply("Volume set to " + (dispatcher.volume * 50) + "%");
                        return;
                    }
                    else {
                        dispatcher.setVolume(msg / 50);
                        message.reply("Volume set to " + (dispatcher.volume * 50) + "%");
                    }
                }
                
            });
            dispatcher.on("end", () => {
                collector.stop();
                queue[message.guild.id].songs.shift();
                play(queue[message.guild.id].songs[0]);
            });
            dispatcher.on("error", (err) => {
                return message.channel.sendMessage("error: " + err).then(() => {
                    collector.stop();
                    queue[message.guild.id].songs.shift();
                    play(queue[message.guild.id].songs[0]);
                });
            });
        })(queue[message.guild.id].songs[0]);
    },

    'join': (message) => {
        return new Promise((resolve, reject) => {
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel || voiceChannel.type !== "voice") return message.reply("I couldn't connect to your voice channel...");
            if (!voiceChannel.name === "Music") return message.reply("You need to be in the music channel!");
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
        });
    },

    'addsong': (message, msg) => {
        if (msg === undefined || msg === "") return message.reply("You didn't give me a youtube link?");
        let url = msg;
        yt.getInfo(url, (err, info) => {
            if (err) return message.channel.sendMessage("That youtube link was invalid?: " + err);
            if (!queue.hasOwnProperty(message.guild.id)) {
                queue[message.guild.id] = {};
                queue[message.guild.id].songs = [];
                queue[message.guild.id].playing = false;
                queue[message.guild.id].loop = false;
                queue[message.guild.id].stop = false;
            }
            queue[message.guild.id].songs.push({ url: url, title: info.title, requester: message.author.username });
            message.channel.sendMessage(`added **${info.title}** to the queue`);
        });
    },

    'queue': (message) => {

        if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ${GuildData.CommandKey}${GuildData.Commands.Music[1]}`);
        let tosend = [];
        queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i + 1}. ${song.title} - Requested by: ${song.requester}`); });
        message.channel.sendMessage(`__**${message.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0, 15).join('\n')}\`\`\``);
    },
};

module.exports = { musicplugin, commands};

function musicplugin(message, msg, cmd) {

    if ()
    let cmdsel = GuildData.Commands.Music.indexOf(cmd);
    commands[Selfunction[cmdsel]](message, msg);
}