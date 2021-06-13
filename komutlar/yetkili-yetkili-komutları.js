const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
	.setTitle('Yetkili komutları')
	.setDescription('**Komutlar:**')
	.setThumbnail(client.user.avatarURL())
  .addFields(
    { name: '`!küfür-engel` 🔞 ', value: 'Küfür engel sistemi.' },
    { name: '`!reklam-engel` 🕴️  ', value: 'Reklam engel sistemi.' },
    { name: '`!caps-engel` 👻 ', value: 'Caps engel sistemi.' },
)
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['yetkili-komutlar'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'yetkili-komutları',  
    description: 'yetkili-komutları', 
    usage: 'yetkili-komutları', 
  };

