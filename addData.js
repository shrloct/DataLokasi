const { addData, questionDataWithValidation } = require('./index')

const addToData = async () => {
    const negara = await questionDataWithValidation('Masukan nama negara: ')
    const provinsi = await questionDataWithValidation('Masukan nama provinsi: ')
    const kota = await questionDataWithValidation('Masukan nama kota/kabupaten: ')
    const kecamatan = await questionDataWithValidation('Masukan nama kecamatan: ')
    const desa = await questionDataWithValidation('Masukan nama desa: ')
    const kampung = await questionDataWithValidation('Masukan nama kampung: ')
    do {
        rtRw = await questionDataWithValidation('Masukan nomor rt/rw (harus angka): ')
    } while (isNaN(rtRw));

    addData(negara, provinsi, kota, kecamatan, desa, kampung, rtRw)
}

module.exports = addToData