const Discord = require('discord.js');
const discordguildid = "763793192453275659"
module.exports = {
    name: 'music-commands',
    description: 'Display info about the music-commands.',
    commandsListUser: [
        '> Pistol to my head\n - 2PAC ',
        '> False pretense\n - RED JUMPSUIT APARATUS ',
        '> Someday\n - FLIPSYDE ',
        '> My life be like\n - GRITS ',
        '> Stressed Out\n - TWENTY ONE PILOTS ',
        '> To Hell We Ride\n - LOSTPROPHETS',


    ],
    execute(message) {
        if (message.channel.id === discordguildid) {

            //TODO permission system , send variable content based on the person requestings permission level

            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${message.guild.name}`)
                .setURL('https://github.com/ioshinigami')
                .setDescription('MUSIC COMMANDS')
                .addFields(
                    {name: "track1", value: this.commandsListUser[0], inline: true},
                    {name: "track2", value: this.commandsListUser[1], inline: true},
                    {name: "track3", value: this.commandsListUser[2], inline: true},
                    {name: "track4", value: this.commandsListUser[3], inline: true},
                    {name: "track5", value: this.commandsListUser[4], inline: true},
                    {name: "track6", value: this.commandsListUser[5], inline: true},
                )
                .setTimestamp()
                .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
            message.channel.send(embed);
        } else {
            message.reply('This is not the correct channel for commands , please use #bot-commands')
        }
    },
};