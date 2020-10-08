module.exports = {
	name: 'stop',
    description: 'Stop current song thats playing.',
	execute(message) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) {
            return message.reply("Please join a voice channel first!");
        }
        voiceChannel.leave()
		
	},
};