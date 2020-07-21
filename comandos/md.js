const Discord = require("discord.js");
module.exports = (client, message, args) => { 
let mensaje = args.join(" ");

if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo por privados.`);
message.author.send(mensaje);}
