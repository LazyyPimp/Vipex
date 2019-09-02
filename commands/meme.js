const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    randomPuppy('animemes')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setImage(url)
        .setColor('#A65EA5')
     return message.channel.send({ embed });
})
}

module.exports.help = {
    name: "meme"
}
