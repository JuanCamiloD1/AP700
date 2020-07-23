const Discord = require("discord.js");
module.exports = (client, message, args) => { 
    client.on('guildMemberAdd', (member) => {
    var joinmessages = [
        `Hola! Bienvenido al cafe ! 

        — — — — —
        Si tienes alguna Duda/Sugerencia no olvides ir al canal #「:exclamation:」soporte  y agarrar tu ticket para hablar privadamente con el staff! 
        — — — — —
        Teniendo en cuenta que eres nuevo/a por favor pedimos con amabilidad que te pases por el canal de #:pushpin:丨reglas y les des una leida, no queremos ningun problema <3
        — — — — —
        Y para tener un perfil bonito asegurate de pasarte por #「:rainbow:」auto-roles 
        — — — — —
        Y por ultimo pero no menos importante, disfruta del server! dechartcorason
        <@${member.id}>`,  
       // `<:join:700961551074590842> Hoy se hace una fiesta porque <@${member.id}> ha llegado.`,                 
      ];                                                                                                   
    
        // Con esto mandamos el mensaje a un canal especifico, Teneis que poner la ID del canal 
      client.channels.cache.get("73489656229338805").send(joinmessages[Math.floor(Math.random() * joinmessages.length)])
    
    });    
}