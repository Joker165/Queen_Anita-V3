//davidthegod

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2348022159244'
global.nomerowner = ["2347043759577"]

// Apikey 

global.skizo = '💔🥺🥰'
global.casterix = 'Killer_Quin 💔🥺🥰'
//watermark 
global.packname = '*💔🥺🥰*'
global.author = 'KILLER_QUIN '

// cpanel 
global.domain = 'https://grey.nobodysey.me' // deeceexxx
global.apikey2 = 'ptla_Uro5ZQNrUZGC9b1RgleuVmGWOkLWS7t76AJjLOozGKt' // I love anita
global.capikey2 = 'ptlc_lcKNgY3kZEMEkS34YwsGc8EwjSp1FOkWMbLTgctONUD' // david x anita 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = false;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.welcome = false;

global.prefix = '.';

global.autobio = false;

global.antilink = false;

global.antilinkkick = false;

global.antilinkwarn = false;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
