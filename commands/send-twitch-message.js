const tmi = require("tmi.js");
const twitchclient = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: '',
    password: '',
  },

  channels: ["thiswaifu"]
});
module.exports = {
  name: 'send-twitch-message',
  description: 'Sends Message in twitch channel.',
  args: true,
  execute(message, args) {
    message.delete();
    if (message.member.hasPermission('ADMINISTRATOR')) {
      console.log(args[0], args[1])

      twitchclient.connect();
      /// FIXME this doesnt work , unsure why
      twitchclient.say("thiswaifu", 'Username' + args[0] + ' ' + args[1])
    }
  },
};