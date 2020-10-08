module.exports = {
	name: 'github-profile',
	description: 'Link to Shinigami\'s github profile.',
	url: 'https://github.com/ioShinigami',
	args: true,
	execute(message) {
		message.channel.send(`GITHUB : ${this.url}`);
	},
};