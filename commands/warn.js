const Discord = require('discord.js');	

module.exports.run = async (bot, message, args) => {
 
 
 message.reply('which member would you like to warn?');
        message.delete(1,1);
    }

    else {
        let member = message.mentions.members.first();
        let user = message.mentions.users.first();
        let reason = message.content.split(/\s+/g).slice(2).join(" ");
        member.createDM()
            .then(channel => {
            channel.send("You have been **warned** for ***"+reason+"***")
            });
        message.channel.send('**'+user.username+'** has been **warned** for ***'+reason+'***');
        message.delete(1,1);
    }
};
