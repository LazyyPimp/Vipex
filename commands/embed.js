module.exports.run = async (bot, message , args, prefix) => {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You dont have such permission.").then(msg => msg.delete(3000));

 const Discord = require("discord.js");
  const word = args.join(" ")
  if (word < 1) return message.channel.send("Didn't provide any text to embed")
  const embed = new Discord.RichEmbed()
    .setDescription(word)
    .setColor(0x00A2E8);
  message.channel.send({embed});
}
