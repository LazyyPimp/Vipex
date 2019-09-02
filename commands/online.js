const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
bot.user.setStatus('online')
  .then(console.log)
  .catch(console.error);

  (message.channel.send(`Set status to "online"!`).then(msg => msg.delete(5000)));

}

module.exports.help = {
    name: "online"
}
