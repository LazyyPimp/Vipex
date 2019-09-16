const ms = require('ms');
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;

  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
}

module.exports.help = {
    name: "timecount"
}
