const discord = require('discord.js')

exports.run = (client, message, args) => {


    var e = [
        "Seni görünce; \ngözlerim dolar, \nkulaklarım euro.",
        "Kar üzerinde yürüyen adama ne denir. Karabasan.",
        "Yıkanan Ton’a ne denir? Washington!",
        "Gidenin arkasına bakmayın yoksa geleni göremezsiniz.",
        "+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.",
        "+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!",
        "+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.",
        "+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.",
        "+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.",
        "Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.",
        "+Acıkan var mı ya? \n-Yok bizde tatlı kan var.",
        "Yılanlardan korkma, yılmayanlardan kork.",
        "+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.",
        "Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.",
        "Aaa siz çok terlemişsiniz durun size terlik getireyim.",
        "Aklımı kaçırdım, 100.000 TL fidye istiyorum."
    ];
            var te = e[Math.floor(Math.random() * e.length)];
            const embed = new discord.MessageEmbed()
            .setColor(ayarlar.tema) 
            .setTitle(`Espiri yükleniyor...`)
            .setTimestamp(message.createdAt)
            .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send(embed).then(x => { 
                setTimeout(function(){
                    const embed = new discord.MessageEmbed()
                    .setColor(ayarlar.tema) 
                    .setTitle(`${te}`)
                    .setTimestamp(message.createdAt)
                    .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
                x.edit(embed)
                },2500)
                }
                );
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["espiri"],
    permLevel: 0
  };
  
  exports.help = {
    name: "espiri",
    description: "espiri",
    usage: "espiri"
  };