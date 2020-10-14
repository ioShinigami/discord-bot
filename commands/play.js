const ytdl = require('ytdl-core')
const presets = [
    "https://www.youtube.com/watch?v=4Jh_2L-z8ag",
    "https://www.youtube.com/watch?v=MiCZdvQXULE",
    "https://www.youtube.com/watch?v=e5QEAI_O2IA",
    "https://www.youtube.com/watch?v=t-yCg-0-baE",
    "https://www.youtube.com/watch?v=pXRviuL6vMY",
    "https://www.youtube.com/watch?v=n5yQ5Girrx0",

]
module.exports = {
    name: 'play',
    description: 'Play song from Youtube Link.',
    args: true,
    execute(message, args) {
        if (message.channel.id === "763793192453275659") {
            const voiceChannel = message.member.voice.channel;
            if (!voiceChannel) {
                return message.reply("Please join a voice channel first!");
            }
            switch (args[0]) {
                case "track1":
                    args[0] = presets[0]
                    break;
                case "track2":
                    args[0] = presets[1]
                    break;
                case "track3":
                    args[0] = presets[2]
                    break;
                case "track4":
                    args[0] = presets[3]
                    break;
                case "track5":
                    args[0] = presets[4]
                    break;
                case "track6":
                    args[0] = presets[5]
                    break;
                default:
                    args[0] = args[0]
                    break;
            }
            voiceChannel.join().then(connection => {
                const stream = ytdl(args[0], { filter: 'audioonly' });
                const dispatcher = connection.play(stream);

                dispatcher.on('finish', () => voiceChannel.leave());
            });
        } else {
            message.reply('This is not the correct channel for commands , please use #botcommands')
        }
    },
};