const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    let userm = message.mentions.users.first()
      var user = message.author;
        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', user.username + message.member.nickname, true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        ///.addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor("RANDOM")
        message.channel.send(embed);  
  }