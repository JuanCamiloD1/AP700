const Discord = require("discord.js");
module.exports = (client, message, args) => { 
let user = message.mentions.users.first(); //creamos una variable para que podamos mencionar a el usuario.
const razon = args.slice(1).join(' '); //creamos la variable que sera la razon que en si son argumentos
    
var perms = message.member.hasPermission("BAN_MEMBERS"); //el usuario necesitara el permiso de Banear Miembros.
if(!perms) return message.channel.send(":no_entry_sign: `Error` `|` No tienes Permisos para usar este comando."); //si el usuario no tiene el permiso necesario retornara un mensaje el cual dira que no tiene los permisos
    
if (message.mentions.users.size < 1) return message.reply(':no_entry_sign: `ERROR` `|` Debe mencionar a alguien.').catch(console.error); //envia un mensaje si no se ha mencionado a alguien.
    
if(!razon) return message.channel.send(':no_entry_sign: `ERROR` `|` Escriba un razÃ³n'); //envia un mensaje si no se proporciono una razon.
    
if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.'); //si el usuario tiene los mismos o mas permisos que el usuario que ejecuto el comando,en si no podra ser baneado.

  
      
message.guild.member(user).ban(razon); //accion de baneo

    const embed = new Discord.RichEmbed() //creamos un embed para darle mas estilo xD.
   
    .setTitle(`Ã°ÂÂÂ | Nuevo Baneo`)
    .setThumbnail(user.avatarURL)
    .addField("Usuario:", `${user}`)
    .addField("ID:", `${user.id}`)
    .addField("RazÃ³n:", `${razon}`)
    .addField("Mod/Admin:", `${message.author.tag}`)
    .setFooter(" Ã°ÂÂÂ§ | Sistema de ModeraciÃ³n", message.author.avatarURL)
    .setColor(0xff001e)
    
    message.channel.send(embed) //envio del mensaje embed
    
    
}