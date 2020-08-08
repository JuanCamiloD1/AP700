const Discord = require("discord.js");
module.exports = (client, message, args) => { 
    var server = message.guild; 
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Ayuda")
    .setDescription("Comandos disponibles:")
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField("Prefix:","AP")
    .addField("avatar:", "muestra el avatar de un usuario")
    .addField("ban:", "banea un usuario")
    .addField("kick:", "expulsa un usuario del servidor")
    .addField("mute:", "mutea a un usuario (REQUIERE ROL DE MUTE EN EL SERVIDOR)")
    .addField("unmute:","desmutea a un usuario")
    .addField("md:", "envía un mesaje al MD del usuario mencionado")
    .addField("perfil:", "muestra el perfil de un usuario")
    .addField("ping:", "muestra el ping del bot con la API de Discord")
    .addField("purge:", "elimina un número de mensajes")
    .addField("random:", "Busca alfo random en wikipedia")
    .addField("say:", "Postea algo en el canal de anuncios del servidor")
    .addField("sayembed:", "Postea algo en el canal general del servidor")
    .addField("server:","muestra información del server")
    message.channel.send(embed);    
    }