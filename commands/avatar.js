
const discordChannelId = "763793192453275659";
module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) {
		if (message.channel.id === discordChannelId) {
		var avatarURL = message.author.displayAvatarURL()      
		message.author.send(avatarURL)
		} else {
			message.reply('This is not the correct channel for commands , please use #botcommands')
		}
	},
};