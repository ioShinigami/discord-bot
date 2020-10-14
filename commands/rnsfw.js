const DabiImages = require('dabi-images')
const DabiClient = new DabiImages.Client();
const CID = "764721707809374228"
const Discord = require('discord.js');



module.exports = {
  name: 'rnsfw',
  description: 'Sends Real NSFW message in discord channel.',
  args: true,
  commandsListUser: [
    '> !rnsfw\n - Returns a Random Real NSFW Random Pic ',
    '> !rnsfw random 10\n - Returns a Random Real NSFW Random Pic Using a Number as a Variable',
    '> !rnsfw best\n - Returns a Random Real NSFW Random Pic Variety ',
    '> !rnsfw ass\n - Returns a Random Real NSFW Ass Pic ',
    '> !rnsfw thighs\n - Returns a Random Real NSFW Thigh Pic ',
    '> !rnsfw panties\n - Returns a Random Real NSFW Panty Pic ',
    '> !rnsfw panties 10\n - Returns a Random Real NSFW Panty Pic Using a Number as a Variable',



  ],
  execute(message, args) {
    message.delete();
    if (message.channel.nsfw && message.channel.id === CID) {
      for (i = 0; i <= args[1]; i++) {
        switch (args[0]) {
          case "commands":
            const embed = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${message.guild.name}`)
              .setURL('https://github.com/ioshinigami')
              .setDescription('REAL NSFW COMMANDS')
              .addFields(
                { name: "Command 1", value: this.commandsListUser[0], inline: true },
                { name: "Command 2", value: this.commandsListUser[1], inline: true },
                { name: "Command 3", value: this.commandsListUser[2], inline: true },
                { name: "Command 4", value: this.commandsListUser[3], inline: true },
                { name: "Command 5", value: this.commandsListUser[4], inline: true },
                { name: "Command 6", value: this.commandsListUser[5], inline: true },
                { name: "Command 7", value: this.commandsListUser[6], inline: true },
              )
              .setTimestamp()
              .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
            message.channel.send(embed)
            break;
          case "best":
            DabiClient.nsfw.real.best().then(response => {
              console.log("execute -> response", response)
              message.channel.send(response.url)

            }).catch(err => {
              console.log(err);
            })
            break;
          case "ass":
            DabiClient.nsfw.real.ass().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          case "thighs":
            DabiClient.nsfw.real.thighs().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          case "panties":
            DabiClient.nsfw.real.panties().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          case "random":
            DabiClient.nsfw.real.random().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          default:
            DabiClient.nsfw.real.random().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
              message.reply('Please try again shortly')
            })
            break;

        }
      }
    } else {
      message.reply('This is not the correct channel for commands , please use #r-nsfw')


    }
  },
};