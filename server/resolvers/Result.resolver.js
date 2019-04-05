const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
  Query: {
    async results(parent, args) {
      return await axios.get(`${dbUrl}/results`).then(res => res.data)
    },

    async result(parent, { id }) {
      return await axios.get(`${dbUrl}/results/${id}`).then(res => res.data)
    }
  },

  Mutation: {
	  async addResult(parent, args) {
		  return await axios.post(`${dbUrl}/results`, args).then(res => res.data)
	  }
  },

  Result: {
	  async test({testId}, args) {
		return await axios.get(`${dbUrl}/tests/${testId}`).then(res => res.data)
	  }
  }
}
