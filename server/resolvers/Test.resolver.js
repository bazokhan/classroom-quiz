const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
  Query: {
    async tests(parent, args) {
      return await axios.get(`${dbUrl}/tests`).then(res => res.data)
    },

    async test(parent, { id }) {
      return await axios.get(`${dbUrl}/tests/${id}`).then(res => res.data)
    }
  },

  Test: {
    async author({ authorId }, args) {
      return await axios.get(`${dbUrl}/users/${authorId}`).then(res => res.data)
    },

    async questions({ questionsId }, args) {
      const allQuestions = await axios
        .get(`${dbUrl}/questions`)
		.then(res => res.data)
      return allQuestions.filter(question => questionsId.includes(question.id))
    },

    async results({ id }, args) {
      const allResults = await axios.get(`${dbUrl}/results`).then(res => res.data)
      return allResults.filter(result => result.testId === id)
    }
  }
}
