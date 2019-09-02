module.exports.run = async (bot, message, args) => {
client.user.setStatus('idle')
  .then(console.log)
  .catch(console.error);
}

module.exports.help = {
    name: "idle"
}
