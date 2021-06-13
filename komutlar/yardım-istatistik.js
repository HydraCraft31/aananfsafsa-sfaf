const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
    let SunucuIPAdresi = "Play.BetaCraft.Org";
    const API = await fetch(`http://mcapi.tc/?${SunucuIPAdresi}/json`)
    const Data = await API.json();
    if (Data.status === "offline") {
        const embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(SunucuIPAdresi)
            .setDescription(`Girmiş olduğun IP adresine bağlı olan sunucu aktif değil.`)
            .setTimestamp(message.createdAt)
            .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
        message.channel.send(embed2)
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setAuthor(SunucuIPAdresi)
            .addField(`Sunucu IP Adresi`, 'Play.BetaCraft.Org')
            .addField(`Ping`, Data.ping, true)
            .addField(`Oyuncu Sayısı`, `${Data.players}/${Data.max_players}`, true)
            .addField(`Sürüm`, Data.version, true)
            .setImage(`http://status.mclive.eu/BetaCraft/${SunucuIPAdresi}/25565/banner.png`)
            .setTimestamp(message.createdAt)
            .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())
        message.channel.send(embed)
    }

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istatistik'],
    permLevel: 0
};
exports.help = {
    name: 'istatistik',
};