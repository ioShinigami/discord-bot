const ticketChannelid = "763806324734820363";
module.exports = {
    name: 'old-ticket',
    description: 'Creates a Ticket Channel for User.',
    execute(message) {
        const x = message;
        x.delete();
        if (x.channel.id === ticketChannelid) {
            x.reply('React to this Message to create a new ticket')
            if(x.content === x) {
            x.react(':thumbsup:')
           
            var owner = x.guild.ownerID
            const name = x.author.username  
            var vN = randomTagGenerator()
            //THIS DOES OUR INITAL INFORMATION ^

        //     message.guild.channels.create("[SUPPORT TICKET]  :  " + vN, { type: 'text', reason: 'Support Ticket' })
        //   //  var everyoneRole = message.member.roles.find(r => r.name === "everyone")
        //     var newRole = 'support' + vN;
        //     message.guild.roles.create({
        //         data: {
        //             name: newRole,
        //             color: 'grey',
        //         },
        //         reason: "Support"
        //     })
        //         .then(r => {

        //             ///TODO FIX THIS - cant add a role to member
        //             //  message.addRole(message.guild.roles.find(role => role.name === newRole))

        //             /*  r.permissionOverwrites(message.author.id, { VIEW_CHANNEL: true});
        //               r.permissionOverwrites(owner, {VIEW_CHANNEL: true});
        //               r.permissionOverwrites(everyoneRole, { VIEW_CHANNEL: false }); */
        //         })
        //         .catch(console.error);
        } else {
            x.author.send('This is not the correct channel for commands , please use #support-ticket')
            }   
        }
    },
};

function randomTagGenerator() {
    var randomnos = Math.ceil(Math.random() * 1000000000);
    return randomnos
}