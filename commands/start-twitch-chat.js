const tmi = require("tmi.js");
const Discord = require('discord.js');    
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
      },
      
      channels: ["lord_kebun"]
    });
module.exports = {
	name: 'start-twitch-chat',
    description: 'Starts a relay chat for twitch.',
    twitchmessage: null,
	execute(message) {
        var newMessage = message;
        client.connect();
        client.on('message', (channel, tags, message) => {
            //console.log(tags)
            //console.log(`${tags['badge-info']}`)
            setTimeout(() => {                
                const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${tags['display-name']}`)
                    .setDescription(`${message}`)
                    .setTimestamp()
                    .setFooter(`${tags['badge-info-raw']}`)
                newMessage.channel.send(embed);
            }, 1000);
            
         
            
            //console.log("execute -> twitchmessage", this.twitchmessage)
        })
  
	},
};