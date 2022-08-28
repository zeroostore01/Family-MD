const qrku = "https://telegra.ph/file/27bd9e930fed78850070f.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Axis [083830815715]
│ • Dana  [085784914140]
│ • Gopay [083890585717]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6283890585717
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli Paketan v: agar bot bisa jalan_
│ _24jam tanpa kendala_
╰───
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
