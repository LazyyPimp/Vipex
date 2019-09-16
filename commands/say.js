const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have such permission.");
    else if(!args[0]) return message.reply("What you want me to say?")
    
    let botmessage = args.join(" ");
    //may throw err if bot dont have permission
    message.delete().catch();
    message.channel.send(botmessage);
}

module.exports.help = {
    name: "say"
}
