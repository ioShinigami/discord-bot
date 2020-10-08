const tmi = require("tmi.js");
const Discord = require('discord.js');    
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
      },
      
      channels: ["cmgriffing"]
    });
module.exports = {
	name: 'stc',
    description: 'Starts a relay chat for twitch.',
    twitchmessage: null,
	execute(message) {
        var newMessage = message;
        client.connect();
        client.on('message', (channel, tags, message) => {
            setTimeout(() => {                
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${tags['display-name']}`)
                    .setDescription(`${message}`)
                    .setTimestamp()
                    .setFooter(`${tags['badge-info-raw']}`)
                newMessage.channel.send(embed);
            }, 5000);
        })
  
	},
};