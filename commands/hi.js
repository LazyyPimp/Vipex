const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
        let quote = ["Hi, my name is jeff!",
                     "( ͡° ͜ʖ ͡°)",
                     "Meow~.",
                     "Honk Honk!",
                     "I am riding bike!",
                     "(づ｡◕‿‿◕｡)づ",
                     "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
                     "＼（＾○＾）人（＾○＾）／",
                     "◃┆◉◡◉┆▷",
                     "(✿◠‿◠)",
                     "ヽ(〃＾▽＾〃)ﾉ",
                     "Ok I noticed you!"
                    ];
        let quoteXD = quote[Math.floor(Math.random() * quote.length)];
        return message.channel.send(quoteXD);
    }

module.exports.help = {
        name: "hi"
}
