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



bot.on("ready", async() => {
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("babies get hit by cars",{type: "Watching"});
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    var prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    
    bot.on('message', message => {
  if (message.content === '.avatar') {
    message.reply(message.author.avatarURL);
  }
});


bot.on('message', message => {
  if (message.content === '.invite') {
    message.reply("https://discord.gg/3YfpZrG");
  }
});



bot.on('message', message => {
  if (message.content === '.owner') {
    message.reply("Lazyy#9825");
  }
});
    
     if (cmd === ".ping") {
        const msg = await message.channel.send(`🏓 Pinging....`);

        // Edit the message
        msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(bot.ping)}ms`);
    }
    
    
    	 if(cmd === ".kick") {
        message.delete()
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("❌ Please **@mention** your target!");
        let kReason = args.join(" ").slice(0);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**🔒 Sorry, you can't do that.**");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ Failed to **Kick**, need a higher than Roles.");
    
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("**👢 Kicked**")
        .setColor(0xFF0000)
        .addField("User", `${kUser}`)
        .addField("Moderator", `<@${message.author.id}>`)
        .addField("Reason", `**\`\`\`${kReason}\`\`\`**`);
    
        let adminlog = message.guild.channels.find(`name`, "mod-logs");
        if(!adminlog) return message.channel.send("❌ Sorry, i need the Logging Channels with name **#mod-logs**.");
        message.guild.member(kUser).kick(kReason);
        adminlog.send(kickEmbed);
    };
    
    if(command === ".ban") {
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
return message.reply("Sorry, you don't have permissions to use this!");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Please mention a valid member of this server");
if(!member.bannable) 
  return message.reply("I cannot ban this user! Do they have a higher role? 
Do I have ban permissions?");

let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided";

await member.ban(reason)
  .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  message.member.tag.sendMessage('Hi! You were banned from ${member.user.server} because: {reason}. If you do not get why you were banned, please DM @Lazyy#9825.')
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

        return message.channel.send(serverInfo);
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

        return message.channel.send(botInfo);
    }
});

//Self Hosting
//bot.login(tokenfile.token);

//Heroku 24/7 Hosting
bot.login(process.env.BOT_TOKEN);
