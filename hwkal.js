// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6281214281312?text=bang+ini+link+donasi+yah+https://bit.ly/3Mw6t30+aku+mau+donasi'
global.ig = '@HW MODS WA' // ubah aja
global.email = 'denyp857@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'HW MODS WA' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['62895385653967'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'HW MODS WA' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'HW MODS WA' // ubah aja ini nama sticker
global.author = 'HW MODS WA' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})