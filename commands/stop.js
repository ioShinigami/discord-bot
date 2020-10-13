module.exports = {
	name: 'stop',
    description: 'Stop current song thats playing.',
	execute(message) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) {
            return message.reply("Please join a voice channel first!").then(msg => {
                msg.channel.delete({ timeout: 5 })
            })
            .catch(console.log(error));
        }
        voiceChannel.leave()
		
	},
};