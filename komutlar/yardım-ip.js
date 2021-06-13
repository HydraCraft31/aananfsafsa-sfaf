const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
  
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
	.setTitle('Minecraft Sunucunun IP Adresi')
  .addField('**IP Adresi:**', '`Play.BetaCraft.Org` 📝 ')
	.setThumbnail(client.user.avatarURL())
  .setTimestamp(message.createdAt)
  .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    
  exports.conf = {
    aliases: ['ip'], 
    permLevel: 0, 
    kategori: "Genel" 
  };
  exports.help = {
    name: 'ip',  
    description: 'ip', 
    usage: 'ip', 
  };

