const Discord = require("discord.js");
module.exports = (client, message, args) => {
    var perms = message.member.hasPermission("ADMINISTRATOR"); 
    if(!perms) return message.channel.send(":no_entry_sign: `Error` `|` No tienes Permisos para usar este comando."); 
    }