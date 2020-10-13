const discordChannelId = "763793192453275659";
const Discord = require('discord.js');
module.exports = {
    name: 'commands',
    description: 'Display info about server commands.',
    commandsListUser: [
        'avatar',
        ' commands',
        ' github-profile',
        ' massdelete',
        ' get-meme',
        ' play',
        ' stop',
        ' project',
        ' send-twitch-message',
        ' stc : start-twitch-chat',
        'get-js-news',
        'hnsfw',
        'rnsfw',
        'music-commands',
        'oceanman',
        ' ticket',
        ' user-info'
    ],
    execute(message) {
        if (message.channel.id === discordChannelId) {

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
            message.author.send(embed)
            } else {
                message.reply('This is not the correct channel for commands , please use #botcommands')
  
            }
    },
};