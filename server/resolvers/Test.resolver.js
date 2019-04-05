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

    async results({ resultId }, args) {
      return await axios
        .get(`${dbUrl}/results/${resultId}`)
        .then(res => res.data)
    }
  }
}
