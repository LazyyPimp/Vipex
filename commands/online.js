const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == process.env.oid) {
  bot.user.setStatus(`online`)  
  let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Online!")
    .setColor("GREEN")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`This command was used at ${new Date()}`)
  message.channel.send({ embed })
 } else {
      message.channel.send("Nope!") 
  }
}

module.exports.help = {
  name: "online",
  usage: "onbot",
  info: ""
}
