module.exports = (client) => {
  
  function presence(){
    client.user.setPresence({
       status: "dnd",
       activity: {
          name: "ser un bot.",
          type: "STREAMING",
          url: "null"
       }
    });
 }
 
  
}