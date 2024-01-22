const { getById, questionData } = require('./index')

const dataId = async () => {
    const id = await questionData('Masukan Id Data: ')
    getById(id)
}
module.exports = dataId