const { deletedById, questionData } = require('./index')

const deleteData = async () => {
    const id = await questionData('Masukan Id Data yang akan dihapus: ')
    deletedById(id)
}
module.exports = deleteData