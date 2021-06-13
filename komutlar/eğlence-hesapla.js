const Discord = require('discord.js')
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;
    var soru = args.join(" ");

    let yanlsknlm = new Discord.MessageEmbed()
    .setColor(ayarlar.tema) 
      .setTitle('Yanlış kullanım \<:no:852927798435250186> ')
    .addField('**Doğru kullanım:**', '`!hesapla [işlem]` 📝 ')
      .setThumbnail(client.user.avatarURL())
    .setTimestamp(message.createdAt)
    .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
  
    if (!soru)
      return message.channel.send(yanlsknlm)
    
    else {
      let cevap;
      try {
        cevap = math.eval(soru);
      } catch (err) {
       return message.send(yanlsknlm)
      }
  
      const hesapla = new Discord.MessageEmbed()
         
        .setColor(ayarlar.tema) 
        .addField("Soru", soru)
        .addField("Cevap", cevap)
        .setTimestamp(message.createdAt)
        .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
      return message.channel.send(hesapla);
    }
  };
    
  exports.conf = {
    aliases: ['hesapla'], 
    permLevel: 0, 
    kategori: "Eğlence" 
  };
  exports.help = {
    name: 'hesapla',  
    description: 'hesapla', 
    usage: 'hesapla <işlem>', 
  };

