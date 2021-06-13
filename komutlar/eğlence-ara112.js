const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor(ayarlar.tema) 
	.setTitle('Ambulans geliyor!! Açın kapıyı!')
  .setImage("https://cdn.discordapp.com/attachments/851076060170289194/852183589323276288/tenor_3.gif")
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['ara112'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'ara112',  
    description: 'ara112', 
    usage: 'ara112', 
  };

