const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
    Query: {
        async users(parent, args) {
            return await axios.get(`${dbUrl}/users`).then(res => res.data)
        },

        async user(parent, {id}) {
            return await axios.get(`${dbUrl}/users/${id}`).then(res=>res.data)
        }
    },

    Mutation: {
        async addUser(parent, args) {
            return await axios.post(`${dbUrl}/users`, args).then(res => res.data)
        },

        async editUser(parent, {id, ...args}) {
            return await axios.patch(`${dbUrl}/users/${id}`, args).then(res => res.data)
        },

        async removeUser(parent, {id}) {
            return await axios.delete(`${dbUrl}/users/${id}`).then(res => res.data)
        }
    }
}