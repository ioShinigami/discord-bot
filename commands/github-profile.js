const discordChannelId = "763793192453275659";
module.exports = {
	name: 'github-profile',
	description: 'Link to Shinigami\'s github profile.',
	url: 'https://github.com/ioShinigami',
	args: true,
	execute(message) {
		if (message.channel.id === discordChannelId) {
		message.author.send(`GITHUB : ${this.url}`)
		} else {
			message.reply('This is not the correct channel for commands , please use #botcommands')
		}
	},
};