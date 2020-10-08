const Discord = require('discord.js');
module.exports = {
	name: 'commands',
    description: 'Display info about server commands.',
    commandsListUser: [
        'avatar',
        ' commands',
        ' github-profile',
        ' massdelete',
        ' user-info'
    ],
	execute(message) {
    

        //TODO permission system , send variable content based on the person requestings permission level
        
    const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`${message.guild.name}`)
    .setURL('https://github.com/ioshinigami')
    .addFields(
        { name: 'AVAILABLE COMMANDS', value: `${this.commandsListUser}` },
        )
        .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
    .setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
	.setTimestamp()
	.setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
		message.channel.send(embed);
	},
};