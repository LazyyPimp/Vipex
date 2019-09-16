const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#ffff00")
    .setTitle("Woof! :dog:")
    .setImage(body.url);

    message.channel.send(dogembed);
}

module.exports.help = {
    name: "doggo"
}
