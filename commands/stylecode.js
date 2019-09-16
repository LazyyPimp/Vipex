const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;


    let codemsg = args.slice(0).join(" ");

    let styledmsg = "```" + codemsg + "```"

    message.delete().catch();
    message.channel.send(styledmsg);
    
}

module.exports.help = {
    name: "code"
}
