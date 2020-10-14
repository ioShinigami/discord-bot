const DabiImages = require('dabi-images')
const DabiClient = new DabiImages.Client();
const CID = "764726824093614161"
const Discord = require('discord.js');



module.exports = {
  name: 'hnsfw',
  description: 'Sends Hentai NSFW message in discord channel.',
  args: true,
  commandsListUser: [
    '> !hnsfw\n - Returns a Random Hentai NSFW Feet Pic ',
    '> !hnsfw feet 10\n - Returns a Random Hentai NSFW Feet Pic Using a Number as a Variable',
    '> !hnsfw ass\n - Returns a Random Hentai NSFW Ass Pic ',
    '> !hnsfw thighs\n - Returns a Random Hentai NSFW Thigh Pic ',
    '> !hnsfw panties\n - Returns a Random Hentai NSFW Panty Pic ',
    '> !hnsfw panties 10\n - Returns a Random Hentai NSFW Panty Pic Using a Number as a Variable ',



  ],
  execute(message, args) {
    message.delete();
    if (message.channel.nsfw && message.channel.id === CID) {
      for (i = 0; i <= args[1]; i++) {
        console.log("execute -> args", args)
        switch (args[0]) {
          case "commands":
            const embed = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${message.guild.name}`)
              .setURL('https://github.com/ioshinigami')
              .setDescription('HENTAI NSFW COMMANDS')
              .addFields(
                { name: "Command 1", value: this.commandsListUser[0], inline: true },
                { name: "Command 2", value: this.commandsListUser[1], inline: true },
                { name: "Command 3", value: this.commandsListUser[2], inline: true },
                { name: "Command 4", value: this.commandsListUser[3], inline: true },
                { name: "Command 5", value: this.commandsListUser[4], inline: true },
                { name: "Command 6", value: this.commandsListUser[5], inline: true },
              )
              .setTimestamp()
              .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
            message.channel.send(embed)
            break;
          case "ass":
            DabiClient.nsfw.hentai.ass().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          case "feet":
            DabiClient.nsfw.hentai.feet().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          case "thighs":
            DabiClient.nsfw.hentai.thighs().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          case "panties":
            DabiClient.nsfw.hentai.panties().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;
          default:
            DabiClient.nsfw.hentai.feet().then(response => {
              message.channel.send(response.url)
            }).catch(err => {
              console.log(err);
            })
            break;

        }
      }
    } else {
      message.reply('This is not the correct channel for commands , please use #h-nsfw')


    }
  },
};