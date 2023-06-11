const fs = require('fs')
const chalk = require('chalk')
    // EDIT DISINI
global.owner = ['6289523000629', '6281268920042'] // no own
global.ownerName = 'Cebi2302'
global.kontakOwner = "6289523000629"
global.packname = 'Sticker By'
global.author = 'Cebi2302 Assistant'
global.sessionName = 'session' // nama session
global.delayy = 3000
global.domain = 'https://cebitech.my.id' // Isi Domain Lu
global.apikey = 'ptla_Qy8QVT9GM2bcZBtFV9wgytSs5vV3w5cxvXBT8V1JT9H' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4PWMFi5OnoIEq79HSCA5yMNy375ojT1CJqg6C18gSCQ' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumbnail = fs.readFileSync('./thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
    delete require.cache[file]
    require(file)
})