const api = require('imageapi.js');
const channelId = "763838373261082657"
module.exports = {
	name: 'get-meme',
	description: 'Display info about yourself.',
	args: true,
	execute(message, args) {
		if(message.channel.id === channelId) {
			var i;
			message.reply('Please wait...Your memes are loading')
			for(i = 0;  i < args[0]; i++) {
				;(async() => {
					let fetched = await api("meme", true)
					console.log(fetched); // logs the image;
					let advanced = await api.advanced("meme", true);
				console.log(advanced); // { img: *img*, res: *response time*, };
				setTimeout(() => {
					message.reply(advanced.img)					
				}, 5000);
			})();
		}
		
		} else {
			message.reply('This is not the correct channel for commands , please use #memes')
		}
	},
};
