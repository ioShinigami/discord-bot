const ticketChannelid = "763806324734820363";
module.exports = {
	name: 'ticket',
	description: 'Creates a Support Ticket',
	execute(message) {
		message.delete();
		if (message.channel.id === ticketChannelid && message.content === '!ticket') {		
            message.reply('a Support Rep , will be with you shortly')
            //console.log(message.guild.channels.cache)
           
            // message.guild.channels.ticketChannelid.message.fetch(message).then(m => {
            //     m.react(':thumbsup:')
            //     m.react(':thumbsup:')
            // })
    
					} else {
			message.author.send('This is not the correct channel for commands , please use #support-ticket')
			
		}
	},
};