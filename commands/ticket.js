const ticketChannelid = "763806324734820363";
module.exports = {
    name: 'ticket',
    description: 'Creates a Ticket Channel for User.',
    execute(message) {
        message.delete();
        if (message.channel.id === ticketChannelid) {
            var owner = message.guild.ownerID
            console.log("execute -> owner", owner)
            const name = message.author.username
            console.log("execute -> name", name)
            var vN = randomTagGenerator()
            message.guild.channels.create("[SUPPORT TICKET]  :  " + vN, { type: 'text', reason: 'Support Ticket' })
            var everyoneRole = message.member.roles.find(r => r.name === "everyone")
            console.log("execute -> everyoneRole", everyoneRole)
            var newRole = 'support' + vN;
            message.guild.roles.create({
                data: {
                    name: newRole,
                    color: 'grey',
                },
                reason: "Support"
            })
                .then(r => {

                    ///TODO FIX THIS - cant add a role to member
                    //  message.addRole(message.guild.roles.find(role => role.name === newRole))

                    /*  r.permissionOverwrites(message.author.id, { VIEW_CHANNEL: true});
                      r.permissionOverwrites(owner, {VIEW_CHANNEL: true});
                      r.permissionOverwrites(everyoneRole, { VIEW_CHANNEL: false }); */
                })
                .catch(console.error);
        } else {
            message.reply('This is not the correct channel for commands , please use #support-ticket')
        }
    },
};

function randomTagGenerator() {
    var randomnos = Math.ceil(Math.random() * 1000000000);
    return randomnos
}