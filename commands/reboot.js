module.exports.run = async (bot, message, args) => {	
  
  
  if (message.author.id !== "531917249418625044") {
		message.react("❌")
		message.reply("You cannot execute this command as it is for my owner only!")
	}
	if (message.author.id === "531917249418625044") {
		message.channel.send("Rebooting...")
		setTimeout(function(){process.exit(1)}, 3000)
	}
}
}

   module.exports.help = {	
  name:"reboot"	
}
