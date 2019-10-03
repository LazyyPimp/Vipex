const botconfig = require("./botconfig.json");
//If you want to self host
//const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find any commands.")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
})

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(25);

for(let i = 0; i < 11; i++) {
  myEmitter.on('event', _ => console.log(i));
}

myEmitter.emit('event');



bot.on("ready", async() => {
    console.log(`${bot.user.username} is online!`);
    bot.send(`${bot.user.username} is now online.`);

    bot.user.setActivity("Made by Lazyy#9825",{type: "Listening"});
});

bot.on('guildMemberAdd', member => {
  console.log('User' + member.user.tag + 'has joined the server!');

  var role = member.guild.roles.find('name', 'Member');
  member.addRole(role);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "."
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

   if(cmd === ".avatar") {
    message.reply(message.author.avatarURL);
  };
 
    
if(cmd === ".invite") {
    message.author.send("https://discord.gg/FVps9Me");
}


if(cmd === ".owner") {
    message.author.send("Lazyy#9825");
  }
    
        
    
    if(cmd === ".suicide") {
        message.delete()
      message.channel.send('***'+message.author.username+' has committed suicide***');
      message.member.kick();
    }
    
    
    if(cmd == `${prefix}serverinfo` || cmd == `${prefix}sinfo`){
        
        let serverIcon = message.guild.iconURL;
        let serverInfo = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#ffffff")
        .setThumbnail(serverIcon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.author.send(serverInfo);
    }

    if(cmd == `${prefix}botinfo` || cmd == `${prefix}binfo`){

        let botIcon = bot.user.displayAvatarURL;
        let botInfo = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#15f153")
        .setThumbnail(botIcon)
        .addField("Bot Name", bot.user.username)
        .addField("Owner", "Lazyy")
        .addField("Created On", bot.user.createdAt);

        return message.author.send(botInfo);
    }
});
//Self Hosting
//bot.login(tokenfile.token);

//Heroku 24/7 Hosting
bot.login(process.env.BOT_TOKEN);
