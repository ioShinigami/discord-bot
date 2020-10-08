module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message) {
        //Create a system that randomly returns an image based on a topic definition @ARGS
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};