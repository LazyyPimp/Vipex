const talkedRecently = new Set();
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
 
   if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    } else {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have such permission.").then(message => message.delete(3000));

 const Discord = require("discord.js");
  const word = args.join(" ")
  if (word < 1) return message.channel.send("Didn't provide any text to embed")
  const embed = new Discord.RichEmbed()
    .setDescription(word)
    .setColor(0x00A2E8);
  message.channel.send({embed});
 


           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
}

module.exports.help = {
    name: "embed"
}
