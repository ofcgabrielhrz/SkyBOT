let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ https://saweria.co/ofctulen
├ Telkomsel:62859106670631
├ Join Forum: https://skysurfers.xyz/
└────
`.trim(), '© SKYSURFERS', 'Pemilik Bot', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
