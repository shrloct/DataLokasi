
const { updateById, questionData } = require('./index')
const upadate = async () => {
    let idToUpdate = await questionData('Masukkan ID data yang akan diupdate: ');
    const updateData = {
        negara: await questionData('Masukan nama negara baru: '),
        provinsi: await questionData('Masukan nama provinsi baru: '),
        kota: await questionData('Masukan nama kota/kabupaten baru: '),
        kecamatan: await questionData('Masukan nama kecamatan baru: '),
        desa: await questionData('Masukan nama desa baru: '),
        kampung: await questionData('Masukan nama kampung baru: '),
        rtRw: await questionData('Masukan nomor rt/rw baru: ')
    };
    updateById(idToUpdate, updateData)

}
module.exports = upadate

// const { updateById, questionData } = require('./index')
// const fs = require('fs')
// const upadate = async () => {
//     const idToUpdate = await questionData('Masukan ID data yang akan diupdate: ');
//     const file = fs.readFileSync('./db/data.json', 'utf-8')
//     let data = JSON.parse(file)

//     const filter = data.findIndex(item => {
//         item.id === idToUpdate
//     })

//     const nameCountry = ['negara', 'provinsi', 'kota/kabupaten', 'kec', 'desa', 'kampung', 'rt']

//     const validateValue = async (nameProperty) => {
//         const coba = await questionData(`Masukan nama ${nameProperty}`)
//         return coba !== '' ? { [nameProperty]: coba } : {}

//     }

//     let newDate = {}
//     for (const property of nameCountry) {
//         const value = await validateValue(property)
//         Object.assign(newDate, value)
//     }


//     updateById(idToUpdate, newDate)
//     console.log(newDate)
// }
// upadate()