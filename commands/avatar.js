module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) {
		var t2 = message.author.displayAvatarURL()      
		message.channel.send(t2);
	},
};