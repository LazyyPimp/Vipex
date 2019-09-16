  const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry, you don't have permissions to use this!");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Please mention a valid member of this server");
if(!member.bannable) 
  return message.reply("I cannot ban this user!")

let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";

await member.ban(reason)
  .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  message.member.tag.sendMessage('Hi! You were banned from ${member.user.server} because: {reason}. If you do not get why you were banned, please DM @Lazyy#9825.')
  }
  
   module.exports.help = {	
  name:"ban"	
}
