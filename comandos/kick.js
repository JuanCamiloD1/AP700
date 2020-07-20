const Discord = require("discord.js");
module.exports = (client, message, args) => { 
    let mencionado = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
  
    if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');
    if(!razon) return message.channel.send('Escriba una razón del uso de kick.');
  
    message.guild.member(mencionado).kick(razon);
    message.channel.send(`**${mencionado.username}**, fue expulsado del servidor, razón: ${razon}.`);
  
  }

  
  