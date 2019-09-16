const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
    

        message.channel.send("http://gifdanceparty.giphy.com/");
        
    }
    
    module.exports.help = {
        name: "party"
    }
