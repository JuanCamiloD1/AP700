const Discord = require("discord.js");
module.exports = (client, message, args) => { 
let mensaje = args.join(" "); 
let user = message.mentions.users.first(); //creamos una variable para que podamos mencionar a el usuario.
const razon = args.slice(1).join(' '); //creamos la variable que sera la razon que en si son argumentos
    
var perms = message.member.hasPermission("ADMINISTRATOR"); //el usuario necesitara el permiso de Admin.
if(!perms) return message.channel.send(":no_entry_sign: `Error` `|` No tienes Permisos para usar este comando."); //si el usuario no tiene el permiso necesario retornara un mensaje el cual dira que no tiene los permisos
    
if (message.mentions.users.size < 1) return message.reply(':no_entry_sign: `ERROR` `|` Debe mencionar a alguien.').catch(console.error); //envia un mensaje si no se ha mencionado a alguien.
if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo por privados.`);
message.user.send(mensaje);}
