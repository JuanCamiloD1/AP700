const Discord = require("discord.js");
module.exports = (client, message, args) => { 
      
      if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Tienes que poner un mensaje!`).then(m => m.delete(5000)); // Este es el mensaje que sale si no pones un argumento
        
        const roleColor = message.guild.me.highestRole.hexColor;


        if (args[0].toLowerCase() === "embed") { // Esto hará que si antes del mensaje contiene embed saldrá el mensaje con una richembed.
            const embed = new Discord.RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" :  roleColor)
                .setTimestamp()
                .setThumbnail(client.user.displayAvatarURL)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }

  }

 