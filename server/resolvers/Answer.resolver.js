const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
    Query: {
        async answers(parent, args) {
            return await axios.get(`${dbUrl}/answers`).then(res => res.data)
        },

        async answer(parent, {id}) {
            return await axios.get(`${dbUrl}/answers/${id}`).then(res=>res.data)
        }
	}
}