const discordChannelId = "763793192453275659";
const Discord = require('discord.js');
module.exports = {
    name: 'commands',
    description: 'Display info about server commands.',
    commandsListUser: [
        '> !avatar',
        '> !commands',
        '> !github-profile',
        '> !massdelete',
        '> !get-meme',
        '> !play',
        '> !stop',
        '> !project',
        '> !send-twitch-message',
        '> !stc : start-twitch-chat',
        '> !get-js-news',
        '> !hnsfw',
        '> !rnsfw',
        '> !music-commands',
        '> !oceanman',
        '> !ticket',
        '> !user-info'
    ],
    execute(message) {
        if (message.channel.id === discordChannelId) {

        //TODO permission system , send variable content based on the person requestings permission level

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.guild.name}`)
            .setURL('https://github.com/ioshinigami')
            .setDescription('***AVAILABLE COMMANDS***')
            .addFields(
                {name: "1", value: this.commandsListUser[0], inline: true},
                {name: "2", value: this.commandsListUser[1], inline: true},
                {name: "3", value: this.commandsListUser[2], inline: true},
                {name: "4", value: this.commandsListUser[3], inline: true},
                {name: "5", value: this.commandsListUser[4], inline: true},
                {name: "6", value: this.commandsListUser[5], inline: true},
                {name: "7", value: this.commandsListUser[6], inline: true},
                {name: "8", value: this.commandsListUser[7], inline: true},
                {name: "9", value: this.commandsListUser[8], inline: true},
                {name: "10", value: this.commandsListUser[9], inline: true},
                {name: "11", value: this.commandsListUser[10], inline: true},
                {name: "12", value: this.commandsListUser[11], inline: true},
                {name: "13", value: this.commandsListUser[12], inline: true},
                {name: "14", value: this.commandsListUser[13], inline: true},
                {name: "15", value: this.commandsListUser[14], inline: true},
                {name: "16", value: this.commandsListUser[15], inline: true},
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