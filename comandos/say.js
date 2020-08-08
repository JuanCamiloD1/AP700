const Discord = require("discord.js");
module.exports = (client, message, args) => { 
  if (message.deletable) message.delete();
let perms = message.member.hasPermission("MANAGE_GUILD"); 
    if(!perms) return message.channel.send('X | No tienes permisos para usar este comando');
    
    let anuncio = args.slice(0).join(" ") 
    if(!anuncio) return message.channel.send('X | Falta el mensaje')
    
    let autor = message.author;
  
  const embed = new Discord.RichEmbed() //Creamos un embed
    //.setTitle('¡Un nuevo mensaje!')
    .setDescription(anuncio) //El anuncio
    .setColor("#2f3136")
  client.channels.get('734864394533470244').send(embed); //Enviamos el embed (anuncio) a un canal por ID
  //client.channels.get('735233291333927022').send('| |') //Para que mencione a los miembros con un everyone
  message.channel.send(':incoming_envelope:| Mensaje Enviado') //Mensaje que envia al canal donde se ejecuto el comando
}