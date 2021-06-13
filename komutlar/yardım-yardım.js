const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
	.setTitle('Yardım komutları')
	.setDescription('**Komutlar:**')
	.setThumbnail(client.user.avatarURL())
  .addFields(
    { name: '`!ip` 📝 ', value: 'Minecraft sunucunun ip adresini gönderir.' },
    { name: '`!sürüm` 📜 ', value: 'Minecraft sunucunun sürümünü gönderir.' },
    { name: '`!istatistik` 📊 ', value: 'Minecraft sunucunun istatistiğini gönderir.' },
    { name: '`!eğlence` 🌈 ', value: 'Eğlence komutlarını gönderir.' },
    { name: '`!ping` 🏓 ', value: 'Botun pingini gönderir.' },
    { name: '`!eşle` 👤 ', value: 'Minecrafttaki hesabını discord hesabına eşler.' },
    { name: '`!yetkili-komutları` 👤 ', value: 'Discordtaki yetkililerin kullana bileceği komutları gönderir.' },
)
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['yardım'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'yardım',  
    description: 'yardım', 
    usage: 'yardım', 
  };

