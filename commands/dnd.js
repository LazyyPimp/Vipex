const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
bot.user.setStatus('dnd')
  .then(console.log)
  .catch(console.error);
}

module.exports.help = {
    name: "dnd"
}
