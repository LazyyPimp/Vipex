const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;

    let foodList = ["pizza","mcdonold","KFC","Tam Jai","都can","新can","oldcan","glass can","lawn can","sushi"];

    let pickfood = Math.floor((Math.random() * foodList.length));


    //message.channel.send(foodList[pickfood][0]);

    //Using Embed to hide the original info
    let webembed = new Discord.RichEmbed()
    .setColor("#289EED")
    .addField("Food", foodList[pickfood])
    
    message.channel.send(webembed);
}

module.exports.help = {
    name: "eatwhat"
}
