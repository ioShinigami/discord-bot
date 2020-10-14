const discordChannelId = "763793192453275659";
const Discord = require('discord.js');
let commandsListUser = require('../commands/utils/commandsList');
module.exports = {
    name: 'commands',
    description: 'Display info about server commands.',

    execute(message) {
        if (message.channel.id === discordChannelId) {
            console.log(commandsListUser.userCommands.commands)
        //TODO permission system , send variable content based on the person requestings permission level

        // const embed = new Discord.MessageEmbed()
        //     .setColor('#0099ff')
        //     .setTitle(`${message.guild.name}`)
        //     .setURL('https://github.com/ioshinigami')
        //     .setDescription('***AVAILABLE COMMANDS***')
        //     .addFields(
        //         {name: "1", value: commandListUser.userCommands.commands[0], inline: true},
        //         {name: "2", value: commandListUser.userCommands.commands[1], inline: true},
        //         {name: "3", value: commandListUser.userCommands.commands[2], inline: true},
        //         {name: "4", value: commandListUser.userCommands.commands[3], inline: true},
        //         {name: "5", value: commandListUser.userCommands.commands[4], inline: true},
        //         {name: "6", value: commandListUser.userCommands.commands[5], inline: true},
        //         {name: "7", value: commandListUser.userCommands.commands[6], inline: true},
        //         {name: "8", value: commandListUser.userCommands.commands[7], inline: true},
        //         {name: "9", value: commandListUser.userCommands.commands[8], inline: true},
        //         {name: "10", value: commandListUser.userCommands.commands[9], inline: true},
        //         {name: "11", value: commandListUser.userCommands.commands[10], inline: true},
        //         {name: "12", value: commandListUser.userCommands.commands[11], inline: true},
        //         {name: "13", value: commandListUser.userCommands.commands[12], inline: true},
        //     )
        //     .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
        //     .setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
        //     .setTimestamp()
        //     .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
        //     message.author.send(embed)
        //     } else {
        //         message.reply('This is not the correct channel for commands , please use #botcommands')
  
            }
    },
};