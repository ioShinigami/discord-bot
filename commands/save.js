module.exports = {
    name: 'save',
    description: 'Creates a save log.',
    args: true,
    execute(message, args) {
        message.delete();
        if (message.member.hasPermission('ADMINISTRATOR')) {
            console.log("execute -> message", message)
            var fs = require('fs');
            var data = args[0] + ',' + '\n'



            fs.appendFile('save.txt', data, function (err) {
                if (err) {
                    console.log(err);
                }
            })
        }
    },
};