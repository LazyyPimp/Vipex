const oid = process.env.oid
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
 
 var game = args.join(' ')
   
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")
   if (!game) {
   
    message.channel.send(`:ok_hand: Okay, I will set my activity back to normal!`)
    bot.user.setActivity(`.help | ${bot.guilds.size} servers`, {type: "WATCHING"})
  } else {
    bot.user.setActivity(`${game}`, {type: "PLAYING"})
    message.channel.send(`:ok_hand: Okay, I will set my activity to '${game}'!`)
  
  }
}

module.exports.help = {
  name: "setGame"
  }
