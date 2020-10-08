const api = require('imageapi.js');
const channelId = "763838373261082657"
module.exports = {
	name: 'get-meme',
	description: 'Display info about yourself.',
	execute(message) {
		if(message.channel.id === channelId) {

			;(async() => {
				let fetched = await api("meme", true)
				console.log(fetched); // logs the image;
				let advanced = await api.advanced("meme", true);
				console.log(advanced); // { img: *img*, res: *response time*, };
				message.channel.send(advanced.img)
			})();
			} else {
				message.reply('This is not the correct channel for commands , please use #memes')
			}
	},
};
