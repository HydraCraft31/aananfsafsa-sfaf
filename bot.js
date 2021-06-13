const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {

  // Oynuyor Kısmı
  
      var actvs = [
        `${prefix}yardım ${client.guilds.cache.size} sunucuyu`,
        `${prefix}yardım ${client.users.cache.size} Kullanıcıyı`, 
        `${prefix}yardım`
    ];
    
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING'});
    }, 15000);
    
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

// Pâyidar Code - Pâyidar

client.on('message', message => {
  if(!message.guild){return}
  
  // Datadaki "Küfür Engel" Kısmını Çağıralım
  let payidarküfürengel = db.fetch(`payidarküfürengel_${message.guild.id}`)

  // Komutlarımıza Geçelim, Eğer Küfür Engel Sistemi Aktif İse Küfür Yazan Kullanıcıya Uyarı Verelim
  if(payidarküfürengel === 'aktif'){
    // Küfür Ayarlamaları
    const payidariküfürliste = ['AMK','Amk','amk','Amına koyayım','AMINA KOYAYIM','amına koyayım','aq','sg','oç','Oç','Sg','Aq','Aw','Sikerim','sikerim','SİKERİM','Amına sokarım','AMINA SOKARIM','amına sokarım','götünü sikerim','Götünü Sikerim','GÖTÜNÜ SİKERİM','Götünü Sikerim']
    if(payidariküfürliste.some(payidar  => message.content.includes(payidar))){
      // Kullanıcının Mesajını Silelim
      message.delete();

      // Küfür eden terbiyesize uyarı mesajı atalım ve bu 5 saniye sonra chati kirletmemek açısından silinsin.
      const keslanterbiyesizherif = new Discord.MessageEmbed()
      .setDescription(`${message.author} - **Hey Dostum!. Lütfen Kelimelerine Dikkat Et. Rahatsız Olan İnsanlarda Var. Biraz Saygılı Ol**`) 
      .setColor('#36393F')
      message.channel.send(keslanterbiyesizherif).then(payidarsil => {
        payidarsil.delete({timeout: 5000})
      })
    }
  } else {
    return
  }
})


client.login(ayarlar.token);
