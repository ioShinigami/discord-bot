const ticketChannelid = "763806324734820363";
module.exports = {
    name: 'ticket',
    description: 'Creates a Ticket Channel for User.',
    execute(message) {
        var owner = message.guild.ownerID
        const name = message.author.username
        const everyoneRole = message.guild.roles.cache.get(role => role.name === "Everyone");
        var vN = randomTagGenerator()
        message.guild.channels.create("[SUPPORT TICKET]  :  " + vN, { type: 'text', reason: 'Support Ticket' })
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
                message.addRole(message.guild.roles.find(role => role.name === newRole))

                /*  r.permissionOverwrites(message.author.id, { VIEW_CHANNEL: true});
                  r.permissionOverwrites(owner, {VIEW_CHANNEL: true});
                  r.permissionOverwrites(everyoneRole, { VIEW_CHANNEL: false }); */
            })
            .catch(console.error);
    },
};

function randomTagGenerator() {
    var randomnos = Math.ceil(Math.random() * 1000000000);
    return randomnos
}