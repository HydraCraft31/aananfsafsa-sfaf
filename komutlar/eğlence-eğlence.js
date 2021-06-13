const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor(ayarlar.tema) 
	.setTitle('Eğlence Komutları')
	.setDescription('**Komutlar:**')
	.setThumbnail(client.user.avatarURL())
  .addFields(
    { name: '`!ara155` 🌈 ', value: 'Polise ararsın.' },
    { name: '`!ara112` 🌈 ', value: 'Ambulans çağırırsın.' },
    { name: '`!espiri` 🌈 ', value: 'Bot size bir espiri gönderir.' },
    { name: '`!tokat-at [@kişi]` 🌈 ', value: 'Belirttiğin kişiyi tokatlarsın.' },
    { name: '`!hesapla` 🌈 ', value: 'Belirtiğin matematik işlemini bot yapar.' },
    { name: '`!kral-ol` 🌈 ', value: 'Bot sizi kral yapar.' },
    { name: '`!beşlik-at [@kişi]` 🌈 ', value: 'Etiketlediğin kişiyi beşlik atarsın.' },
    { name: '`!balık-tut` 🌈 ', value: 'Denizden bir balıt tutarsın.' },    
    { name: '`!kaç-cm` 🌈 ', value: 'Bot malafatının malafat uzunluğunuzu gönderir.' },
    { name: '`!yazı-tura` 🌈 ', value: 'Bot ile yazı tura oynunu oynarsınız.' },
    { name: '`!öp [kişi]` 🌈 ', value: 'Belirtiğin kişiyi öpersiniz.' },
    { name: '`!şeker-ye` 🌈 ', value: 'Bot size şeker ikram eder.' },
    { name: '`!kartopu-at [@kişi]` 🌈 ', value: 'Belirtiğin kişiye kar topu atarsınız' }
)
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['eğlence'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'eğlence',  
    description: 'eğlence', 
    usage: 'eğlence', 
  };

