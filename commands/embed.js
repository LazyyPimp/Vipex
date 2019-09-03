const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

// set message listener 
client.on('message', message => {
    let command = message.content;

    // match commands like /embed [title]; [description]
    // first \w+ is for the title, 2nd is for description
    if ( /^\/embed \[[\w ]+\]; \[[\w ]+\]$/.test(command) )
        sendEmbed(message);
});

function sendEmbed(message) {
    let command = message.content;
    let channel = message.channel;
    let author = message.author;

    // get title string coordinates in command
    let titleStart = command.indexOf('[');
    let titleEnd = command.indexOf(']');
    let title = command.substr(titleStart + 1, titleEnd - titleStart - 1);

    // get description string coordinates in command
    // -> (start after +1 so we don't count '[' or ']' twice)
    let descStart = command.indexOf('[', titleStart + 1);
    let descEnd = command.indexOf(']', titleEnd + 1);
    let description = command.substr(descStart + 1, descEnd - descStart - 1);

    // next create rich embed
    let embed = new Discord.RichEmbed({
        title: title,
        description: description
    });

    // set author based of passed-in message
    embed.setAuthor(author.username, author.displayAvatarURL);

    // send embed to channel
    channel.send(embed);
}
