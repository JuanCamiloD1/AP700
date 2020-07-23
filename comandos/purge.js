const Discord = require("discord.js");
const fetch = require("fetch");
const args = message.content.split(' ').slice(1); 
const amount = args.join(' ');
module.exports = (client, message, args) => {    
    if (!amount) return msg.reply('Debes poner un número de mensajes a eliminar'); 
    if (isNaN(amount)) return msg.reply('El parámetro no es numérico');  
    if (amount > 100) return msg.reply('No puedes eliminar más de 100 mensajes con un solo comando'); 
    if (amount < 1) return msg.reply('Vas a eliminar unos mensajes'); 
    
    await msg.channel.messages.fetch({ limit: amount }).then(messages => { 
        msg.channel.bulkDelete(messages 
    )});
}