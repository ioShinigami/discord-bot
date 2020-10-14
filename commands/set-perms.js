const discordChannelId = "763793192453275659";
module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
		message.delete();
		if (message.channel.id === discordChannelId) {
			message.author.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
		} else {
			message.reply('This is not the correct channel for commands , please use #botcommands')
		}
	},
};