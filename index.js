const idRandom = require('./idRandom')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// MEMERIKSA FOLDER db apakah sudah ada atau belum, kalau belum maka buat folder dengan nama db
const directtory = './db'
if (!fs.existsSync(directtory)) {
    fs.mkdirSync(directtory)
}

// MEMERIKSA FILE data.json apakah udh ada atau belum, kalau belum maka membuat file data.json dalam folder db
const checkFile = './db/data.json'
if (!fs.existsSync(checkFile)) {
    (fs.writeFileSync(checkFile, '[]', 'utf-8'))
}

const questionData = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}


// MEMBACA dan mencetak data dari file JSON
const data = () => {
    const fileData = fs.readFileSync(checkFile, 'utf-8')
    const parsedData = JSON.parse(fileData)
    console.log(parsedData)
}

// MENAMBAH DATA kedalam file data.json yang berada didalam folder db
const addData = (negara, provinsi, kota, kecamatan, desa, kampung, rtRw) => {
    const id = idRandom(5)
    const data = { id, negara, provinsi, kota, kecamatan, desa, kampung, rtRw }
    const file = fs.readFileSync(checkFile, 'utf-8')

    const existingData = JSON.parse(file)
    existingData.push(data)
    fs.writeFileSync(checkFile, JSON.stringify(existingData, null, 2))
    console.log('--------------------------')
    console.log('Data added successfully ✔')
    console.log('--------------------------')

}



// MEMBUAT VALIDASI supaya data tidak boleh diisi kosong
const questionDataWithValidation = async (question) => {
    let answer = '';
    do {
        answer = await questionData(question);
        if (!answer.trim()) {
            console.log('Error: Field harus diisi. Silakan coba lagi.');
        }
    } while (!answer.trim());

    return answer;
};



// MENGECEK data lewat id
const getById = (id) => {
    const file = fs.readFileSync(checkFile, "utf-8")
    const data = JSON.parse(file)
    const targetData = data.find(item => item.id === id)

    if (targetData) {
        console.log(targetData)
    } else {
        console.log('---------------------------')
        console.log(`\n Id ${id} not found!! \n`)
        console.log('---------------------------')
    }

}


// UPDATE data lewat id
const updateById = (id, updateData) => {
    const file = fs.readFileSync(checkFile, 'utf-8')
    const JSONdata = JSON.parse(file)
    const index = JSONdata.findIndex(item => item.id === id)

    if (index !== -1) {
        // Iterasi setiap properti dalam updateData
        for (const key in updateData) {
            // Periksa apakah nilai baru tidak kosong
            if (updateData[key] !== '') {
                // Perbarui nilai jika tidak kosong, sebaliknya, tetapkan nilai yang sudah ada
                JSONdata[index][key] = updateData[key];
            }
        }

        fs.writeFileSync(checkFile, JSON.stringify(JSONdata, null, 2))
        console.log('Successfully updated data: ' + id)
    } else {
        console.log('--------------------------------------------')
        console.log(`Data dengan ID ${id} tidak dapat ditemukan!!`)
        console.log('--------------------------------------------')
    }

}




// MENGHAPUS data dengan Id
const deletedById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8')
    const JSONdata = JSON.parse(file)
    const filterDataId = JSONdata.filter(item => item.id !== id)

    if (filterDataId.length < JSONdata.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterDataId, null, 2))
        console.log(`Success deleted in Id: ${id}`)
    } else {
        console.log(`Id ${id} not found!!`)
    }

}

module.exports = { questionData, data, addData, questionDataWithValidation, getById, updateById, deletedById }