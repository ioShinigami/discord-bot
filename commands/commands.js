const discordChannelId = "763793192453275659";
const Discord = require('discord.js');
let commandsListUser = require('../commands/utils/commandsList');
module.exports = {
    name: 'commands',
    description: 'Display info about server commands.',

    execute(message) {
        console.log(message.guild.roles)
        message.delete();
        if (message.channel.id === discordChannelId && message.member.hasPermission('ADMINISTRATOR')) {
            //TODO permission system , send variable content based on the person requestings permission level
            var adminCommandList = commandsListUser.adminCommands.adminCmds
            console.log(adminCommandList)
            const embedAdmin = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${message.guild.name}`)
                .setURL('https://github.com/ioshinigami')
                .setDescription('***ADMIN COMMANDS***')
                .addFields(
                    { name: "1", value: adminCommandList[0], inline: true },
                    { name: "2", value: adminCommandList[1], inline: true },
                    { name: "3", value: adminCommandList[2], inline: true },
                    { name: "4", value: adminCommandList[3], inline: true },
                    { name: "5", value: adminCommandList[4], inline: true },
                    { name: "6", value: adminCommandList[5], inline: true },
                    { name: "7", value: adminCommandList[6], inline: true },
                    { name: "8", value: adminCommandList[7], inline: true },
                    { name: "9", value: adminCommandList[8], inline: true },
                    { name: "10", value: adminCommandList[9], inline: true },
                    { name: "11", value: adminCommandList[10], inline: true },
                    { name: "12", value: adminCommandList[11], inline: true },
                    { name: "13", value: adminCommandList[12], inline: true },
                    { name: "14", value: adminCommandList[13], inline: true },
                    { name: "15", value: adminCommandList[14], inline: true },
                    { name: "16", value: adminCommandList[15], inline: true },
                    { name: "17", value: adminCommandList[16], inline: true },
                    { name: "18", value: adminCommandList[17], inline: true },
                )
                .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
                .setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
                .setTimestamp()
                .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
            message.author.send(embedAdmin)
            console.log('he an admin')
        } else {
            let userCommandList = commandsListUser.commandsListUser.userCommands.commands
            console.log('he not an admin')
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${message.guild.name}`)
                .setURL('https://github.com/ioshinigami')
                .setDescription('***AVAILABLE COMMANDS***')
                .addFields(
                    { name: "1", value: userCommandList[0], inline: true },
                    { name: "2", value: userCommandList[1], inline: true },
                    { name: "3", value: userCommandList[2], inline: true },
                    { name: "4", value: userCommandList[3], inline: true },
                    { name: "5", value: userCommandList[4], inline: true },
                    { name: "6", value: userCommandList[5], inline: true },
                    { name: "7", value: userCommandList[6], inline: true },
                    { name: "8", value: userCommandList[7], inline: true },
                    { name: "9", value: userCommandList[8], inline: true },
                    { name: "10", value: userCommandList[9], inline: true },
                    { name: "11", value: userCommandList[10], inline: true },
                    { name: "12", value: userCommandList[11], inline: true },
                    { name: "13", value: userCommandList[12], inline: true },
                )
                .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
                .setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
                .setTimestamp()
                .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
            message.author.send(embed)


        }
    },
};