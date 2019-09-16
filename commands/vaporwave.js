const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;

if(!args[0]) return message.reply("What you want me to say?");

let msgstring = args.join(" ");

let msgstringVapor = msgstring.split('').join(' ');

String.prototype.toFullWidth = function() {
    return this.replace(/[A-Za-z0-9]/g, function(s) {return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);});
};


message.channel.send(msgstringVapor.toFullWidth());
}

module.exports.help = {
    name: "vaporwave"
}
