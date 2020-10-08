const ytdl = require('ytdl-core')
module.exports = {
	name: 'play',
    description: 'Play song from Youtube Link.',
    args: true,
	execute(message, args) {
        if(message.channel.id === "763793192453275659") {
            const voiceChannel = message.member.voice.channel;
            if(!voiceChannel) {
                return message.reply("Please join a voice channel first!");
            }
            voiceChannel.join().then(connection => {
                const stream = ytdl(args[0], { filter: 'audioonly'});
                const dispatcher = connection.play(stream);
    
                dispatcher.on('finish', () => voiceChannel.leave());
            });
        } else {
            message.reply('This is not the correct channel for commands , please use #botcommands')
        }		
	},
};