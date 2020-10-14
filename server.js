const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');




const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('CONNECTION STARTED!');
	client.user.setActivity(`with Anime Tiddies`);
});

client.on('guildMemberAdd', member => {
	const user = `${member}`
	const welcomeMessageArray = [
		'Hooray!  welcome to Shinigami Development, ' + user,
		user + ', just arrived in style!',
		'Welcome to the party, ' + user,
		'CHANG GANG!!! ' + user
	]
  var t = randomMessageGenerator()
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('WELCOME')
  .setDescription(welcomeMessageArray[t])
  .setTimestamp()
  .setFooter('Enjoy your stay');
  channel.send(embed)
 // member.guild.channels.find(c => c.name === "welcome").send(welcomeMessageArray[t]);

	// Send the message, mentioning the member

	//channel.send();
  });

  client.on("messageDelete", (messageDelete) => {
	
	  const channel = messageDelete.guild.channels.cache.find(ch => ch.name === 'admin-logs');
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
	  channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author} was deleted. Their ID is ${messageDelete.author.id}`);
  }); 

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		var response = "there was an error trying to execute that command!"
		message.reply(response);
	}
});

client.login(token);


function randomMessageGenerator() {
		var max = Math.floor(4)
		var min = Math.ceil(1)
		var newRandomMath = Math.floor(Math.random() * (max - min) + min);
	return newRandomMath
	
}