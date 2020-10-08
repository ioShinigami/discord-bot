module.exports = {
    name: 'project',
    description: 'Creates a project log.',
    args: true,
    execute(message, args) {
        console.log("execute -> message", message)
        var fs = require('fs');
        var data = {
            idea: args,

        }

        var jsonData = JSON.stringify(data);
        console.log("execute -> jsonData", jsonData)
        fs.appendFile('project.json', jsonData, function (err) {
            if (err) {
                console.log(err);
            }
        })

    },
};