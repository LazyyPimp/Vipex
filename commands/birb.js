const superagent = require('superagent');

module.exports.run = async (bot,message,args) => {

let { text } = await superagent.get('http://random.birb.pw/tweet');
// console.log(text);
let testEmbed = new Discord.RichEmbed()
.setColor("0x000000")
.setTitle("title")
.setImage(`https://imgur.com/${text}`);
message.channel.send(testEmbed);


// using node-fetch
const fetch = require('node-fetch');

let { file } = await fetch('http://random.birb.pw/tweet.json').then(body => body.json()); // getting "file" object from fetched body
// console.log(file);
message.channel.send(`https://imgur.com/${file}`);
let testEmbed = new Discord.RichEmbed()
.setColor("0x000000")
.setTitle("title")
.setImage(`https://imgur.com/${file}`);
message.channel.send(testEmbed);

}

module.exports.help = {
    name: "birb"
}
