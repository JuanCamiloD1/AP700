const Discord = require("discord.js");
module.exports = (client, message, args) => { 
let perms = message.member.hasPermission("MANAGE_GUILD"); 
    if(!perms) return message.channel.send('X | No tienes permisos para publicar el anuncio');
    
    let anuncio = args.slice(0).join(" ") 
    if(!anuncio) return message.channel.send('X | Falta el anuncio')
    
    let autor = message.author;
  
  const embed = new Discord.RichEmbed() //Creamos un embed
    .setTitle('¡Anuncio!')
    .setDescription(anuncio) //El anuncio
    .addField('Anunciado por:', autor.username)
    .setColor("RANDOM")
  client.channels.get('735233291333927022').send(embed); //Enviamos el embed (anuncio) a un canal por ID
  client.channels.get('735233291333927022').send('') //Para que mencione a los miembros con un everyone
  message.channel.send('| Anuncio Enviado') //Mensaje que envia al canal donde se ejecuto el comando
}