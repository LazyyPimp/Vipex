const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
bot.user.setStatus('dnd')
(message.channel.send(`Set status to "dnd"!`).then(msg => msg.delete(5000));
  .then(console.log)
  .catch(console.error);
}

module.exports.help = {
    name: "dnd"
}
