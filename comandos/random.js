const Discord = require("discord.js");
  module.exports = (client, message, args) => { 
    let wiki = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription("[Página aleatoria](http://es.wikipedia.org/wiki/Special:Random)")
.setThumbnail("https://em.wattpad.com/bf3541bde7a61281a522d18c3ae783f453f9b0b7/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4938574f387772505a2d467672513d3d2d3539373030303038362e313533663432653032633166323430333733343139363238313439362e676966?s=fit&w=720&h=720")
.setFooter("")
message.channel.send(wiki)    
  }