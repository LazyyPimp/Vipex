exports.run = async (client, message, [status, game, type]) => {
  client.user.setStatus(status);

  const list = {
    play: "PLAYING", 
    stream: "STREAMING", 
    listen: "LISTENING", 
    watch: "WATCHING"
  };

  if (!game) { game = `Playing around with ${client.owner.username}`; } 
  if (game.toLowerCase() === "null") { game = null; } 
  else { game = `m~help | ${game}`; }

  client.user.setPresence({ activity: { name: game, type: list[type] } }); 
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  aliases: [],
  permLevel: 9,
  botPerms: [],
};


module.exports.help = {
  name: "setGame",
}
