const discordChannelId = "763838373261082657";
const phrase = "OCEAN MAN :ocean: :heart_eyes: Take me by the hand :raised_hand: lead me to the land that you understand :raised_hands: :ocean: OCEAN MAN :ocean: :heart_eyes: The voyage :bike: to the corner of the :earth_americas: globe is a real trip :ok_hand: :ocean: OCEAN MAN :ocean: :heart_eyes: The crust of a tan man :man_with_turban: imbibed by the sand :+1: Soaking up the :sweat_drops: thirst of the land :100:"
module.exports = {
	name: 'oceanman',
	description: 'Fun.',
	execute(message) {
		message.delete();
		if (message.channel.id === discordChannelId) {
			message.channel.send(phrase);
		} else {
			message.reply('This is not the correct channel for commands , please use #meme')
		}
	},
};