const Discord = require("discord.js");
module.exports = (client) => {

    client.user.setPresence( 
      {
        status: "online", 
        game: { 
          name: 'Connor main theme', 
          url: null, // Establece el enlace del juego si el tipo es "STREAMING".
          type: "LISTENING"
        }
      }
    );


  } 