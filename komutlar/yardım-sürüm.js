const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
	.setTitle('Minecraft Sunucunun Sürümü')
  .addField('**Sürümü:**', '`1.8x - 1.16.5x` 📜 ')
	.setThumbnail(client.user.avatarURL())
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['sürüm'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'sürüm',  
    descrsürümtion: 'sürüm', 
    usage: 'sürüm', 
  };

