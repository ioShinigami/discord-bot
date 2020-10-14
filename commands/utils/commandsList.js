module.exports = {
    commandsListUser :
    {
        userCommands: {
            commands :
           ['> !avatar',
           '> !commands',
           '> !github-profile',
           '> !get-meme',
           '> !play',
           '> !stop',
           '> !get-js-news',
           '> !hnsfw',
           '> !rnsfw',
           '> !music-commands',
           '> !oceanman',
           '> !ticket',
           '> !user-info']
            }
        },
        adminCommands: {
            mass_delete: {
                commandTitle: '!md <number>'
            },
            project: {
                commandTitle: '!project <args>'
            },
            save: {
                commandTitle: '!save <args>'
            },
            send_twitch_message: {
                commandTitle: '!send-twitch-message ***needs fix***'
            },
            start_twitch_chat: {
                commandTitle: '!stc : start twitch chat'
            },
        }
    }
    
    ;