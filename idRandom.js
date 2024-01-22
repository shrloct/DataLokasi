const idRandom = (length) => {
    let result = '';
    const numberId = '0123456789';
    for (let i = 0; i < length; i++) {
        result += numberId.charAt(Math.floor(Math.random() * numberId.length))
    }
    return result
}

module.exports = idRandom