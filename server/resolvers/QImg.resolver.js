const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
    Query: {
        async qImgs(parent, args) {
            return await axios.get(`${dbUrl}/qImgs`).then(res => res.data)
        },

        async qImg(parent, {id}) {
            return await axios.get(`${dbUrl}/qImgs/${id}`).then(res=>res.data)
        }
	}
}