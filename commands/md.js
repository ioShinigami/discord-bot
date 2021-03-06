module.exports = {
	name: 'md',
	description: 'Mass Delete up to 99 messages.',
	execute(message, args) {
		if (message.member.hasPermission('ADMINISTRATOR')) {
			const amount = parseInt(args[0]) + 1;

			if (isNaN(amount)) {
				return message.author.send('that doesn\'t seem to be a valid number.');
			} else if (amount <= 1 || amount > 100) {
				return message.author.send('you need to input a number between 1 and 99.');
			}

			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to mass delete messages in this channel!');
			});
		}
	},
};