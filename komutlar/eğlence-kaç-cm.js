const discord = require('discord.js')

exports.run = (client, message, args) => {


    var e = [
        "2 cm",
        "6 cm",
        "8 cm",
        "13 cm",
        "21 cm",
        "27 cm",
        "31 cm",
        "36 cm",
        "44 cm",
        "51 cm"

    ];
            var te = e[Math.floor(Math.random() * e.length)];
            const embed = new discord.MessageEmbed()
            .setColor('BLACK')
            .setTitle(`Uzunluk ölçülüyor...`)
            .setTimestamp(message.createdAt)
            .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
            message.channel.send(embed).then(x => { 
                setTimeout(function(){
                    const embed = new discord.MessageEmbed()
                    .setColor('BLACK')
                    .setTitle(`${te} :eggplant:`)
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
    aliases: ["kaç-cm"],
    permLevel: 0
  };
  
  exports.help = {
    name: "kaç-cm",
    description: "kaç-cm",
    usage: "kaç-cm"
  };