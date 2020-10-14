const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'kick',
    description: 'Kicks user from server.',
    execute(message, args) {
        if (message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You have no permissions to do that');
            return;
        };
        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if (!mentionMember) {
            message.channel.send('Please mention the member which you want to kick');
            return;
        }

        //Check if your bot can`t kick this user, so that show this error msg 
        if (!mentionMember.kickable) {
            message.channel.send('I have no permissions to kick this user');
            return
        };

        //If all steps are completed successfully try kick this user
        // mentionMember.reply('Kicked')
        mentionMember.kick()
            .then(() => {
                const channel = message.guild.channels.cache.find(ch => ch.name === 'admin-logs');
                const whoKicked = message.author.username
                let reasonLength = args.length
                if (reasonLength !== 1) {
                    let reason = args.slice(1);
                    const embedKick = new Discord.MessageEmbed()
                        .setColor('#F18C8E')
                        .setTitle(`${message.guild.name}`)
                        .setDescription('***USER KICKED***')
                        .addFields(
                            { name: "AUTHOR", value: whoKicked, inline: true },
                            { name: "USER KICKED", value: mentionMember, inline: true },
                            { name: "REASON", value: reason, inline: true },
                        )
                        .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
                        .setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
                        .setTimestamp()
                        .setFooter('This is an automated response', 'https://i.imgur.com/wSTFkRM.png');
                    channel.send(embedKick);
                }
            }).catch(console.error);


        // client.channels.cache.get(discordChannel).send(whoKicked + " " + mentionMember)


    },
};