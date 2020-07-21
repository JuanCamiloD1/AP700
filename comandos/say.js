const Discord = require("discord.js");
module.exports = (client, message, args) => { 
    
      if(args[0] == "embed") { //Si la primera args es embed pasa esto...
            let texto = args.slice(1).join(" ") //Defines texto a partir de la 2da args
            if(!texto) return message.channel.send("No has escrito un mensaje"); //Si no has puesto texto te lo dice
            const embed = new Discord.RichEmbed() //Defines embed
            .setDescription(texto) //Pones el texto
            .setColor("RANDOM") //Color random
            .setFooter(client.user.username, client.user.avatarURL()) //Pones el footer (opcional)
            message.channel.send(embed) //Mandas el embed
            message.delete({timeout:0}) //Borras el mensaje del autor
            } else if(args[0] == "normal") { //Si la primera args es normal pasa esto...
            let texto = args.slice(1).join(" ") 
            if(!texto) return message.channel.send("No has escrito un mensaje");
            message.channel.send(texto) //Mandas el mensaje
            message.delete({timeout:0})
            } //Cierras la condición del normal
  }

 