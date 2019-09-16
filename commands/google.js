const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;

    if(!args[0]) return message.reply("What you want me to google?")

    let lmgtfy = "http://lmgtfy.com/?q="
    let question = args.join("+");

    let lmgtfyq = lmgtfy + question;

    message.channel.send(lmgtfyq);


}

module.exports.help = {
    name: "google"
}
