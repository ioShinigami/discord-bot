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