const discordChannelId = "763793192453275659";
const Discord = require('discord.js');
let commandsListUser = require('../commands/utils/commandsList');
module.exports = {
    name: 'commands',
    description: 'Display info about server commands.',

    execute(message) {
        if (message.channel.id === discordChannelId) {
            console.log(commandsListUser.userCommands)
        //TODO permission system , send variable content based on the person requestings permission level

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.guild.name}`)
            .setURL('https://github.com/ioshinigami')
            .setDescription('***AVAILABLE COMMANDS***')
            .addFields(
                {name: "1", value: this.commandsListUser.userCommands[0], inline: true},
                {name: "2", value: this.commandsListUser.userCommands[1], inline: true},
                {name: "3", value: this.commandsListUser.userCommands[2], inline: true},
                {name: "4", value: this.commandsListUser.userCommands[3], inline: true},
                {name: "5", value: this.commandsListUser.userCommands[4], inline: true},
                {name: "6", value: this.commandsListUser.userCommands[5], inline: true},
                {name: "7", value: this.commandsListUser.userCommands[6], inline: true},
                {name: "8", value: this.commandsListUser.userCommands[7], inline: true},
                {name: "9", value: this.commandsListUser.userCommands[8], inline: true},
                {name: "10", value: this.commandsListUser.userCommands[9], inline: true},
                {name: "11", value: this.commandsListUser.userCommands[10], inline: true},
                {name: "12", value: this.commandsListUser.userCommands[11], inline: true},
                {name: "13", value: this.commandsListUser.userCommands[12], inline: true},
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