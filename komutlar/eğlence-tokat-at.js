const Discord = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("Tokatlayacağın birisini etiketle örn: `!tokat-at @kişi`")
      .catch(console.error);

const embed = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(
      ` ${user} ` + message.author.username + " **Seni tokatladı. Nasıl hissediyorsun?**"
    )
    .setImage("https://cdn.discordapp.com/attachments/824205302144565258/852178956224167966/tenor_1.gif")
    .setTimestamp(message.createdAt)
    .setFooter('Bu komutu kullanan kullanıcı: ' + message.author.tag, message.author.displayAvatarURL())

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at"],
  permLevel: 0
};

exports.help = {
  name: "tokat-at",
  description: "tokat-at",
  usage: "tokat-at"
};
