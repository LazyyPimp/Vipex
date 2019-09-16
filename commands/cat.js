const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const superagent = require("superagent");
const prefix = botconfig.prefix

module.exports.run = async (bot,message,args) => {
 
if(!message.content.startsWith(prefix))return;
 
    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let catembed = new Discord.RichEmbed()
    .setColor("#ff00ff")
    .setTitle("Meow! :cat:")
    .setImage(body.file);

    message.channel.send(catembed);
}

module.exports.help = {
    name: "cat"
}
