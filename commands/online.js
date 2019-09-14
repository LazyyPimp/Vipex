const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You dont have such permission.");
  bot.user.setStatus('online')
  .then(console.log)
  .catch(console.error);
  
    message.delete().catch();
  (message.author.send(`Set status to "online"!`));
  
}

module.exports.help = {
    name: "online"
}
