const discordChannelId = "763793192453275659";
module.exports = {
    name: 'stop',
    description: 'Stop current song thats playing.',
    execute(message) {
        message.delete();
        const voiceChannel = message.member.voice.channel;
        if (message.channel.id === discordChannelId) {
            if (!voiceChannel) {
                return message.reply("Please join a voice channel first!").then(msg => {
                    msg.channel.delete({ timeout: 5 })
                })
                    .catch(console.log(error));
            }
            voiceChannel.leave()
        } else {
            message.reply('This is not the correct channel for commands , please use #botcommands')
        }
    },
};