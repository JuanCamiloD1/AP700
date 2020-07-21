const Discord = require("discord.js");
module.exports = (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("no tienes permisos.");
      let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          let reason =  args.slice(1).join(' ');
    if(!target) return message.reply("no has mencionado a la persona.");
          if(!reason) return message.reply("falta la razón por la que se expulsará a esta persona.");
    //USAR MENCIÓN DEL MENSAJE
  message.delete(10000)
    let member = message.mentions.members.first();
    if(!target.kickable) return message.channel.send("El bot no cuenta con permisos")
  if(!message.member.hasPermission("KICK_MEMBERS")) {
    message.reply('no tienes permisos.')
  }
  //SACAR AL MENCIONADO
  if(message.member.hasPermission("KICK_MEMBERS"))
  member.kick().then((member)  => {
    message.reply("expulsión éxitosa.")
  let embed = new Discord.RichEmbed()
  .setColor("00ff00")
  .setTimestamp()
  .setTitle(":warning: Kickeo :warning:")
  .setDescription(`**Usuario:** \n${target} \n\n**Razón:** \n${reason} \n\n**STAFF:** \n${message.author}\n\n`)
    .setThumbnail(client.user.avatarURL)
    .setFooter(message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
  });
  };

  
  