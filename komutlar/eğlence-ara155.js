const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor(ayarlar.tema) 
	.setTitle('Polis Geldi açın kapıyı!')
  .setImage("https://cdn.discordapp.com/attachments/824205302144565258/852186407128530995/bloggif_60c0ca225b549.gif")
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['ara155'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'ara155',  
    description: 'ara155', 
    usage: 'ara155', 
  };

