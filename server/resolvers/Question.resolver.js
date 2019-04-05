const dbUrl = require('./db')
const axios = require('axios')

module.exports = {
  Query: {
    async questions(parent, args) {
      return await axios.get(`${dbUrl}/questions`).then(res => res.data)
    },

    async question(parent, { id }) {
      return await axios.get(`${dbUrl}/questions/${id}`).then(res => res.data)
    }
  },

  Question: {
    async answers({ answerId }, args) {
      const answers = await axios.get(`${dbUrl}/answers`).then(res => res.data)
      return answers.filter(answer => answerId.includes(answer.id))
    },

    async correctAnswer({ correctAnswerId }, args) {
      return await axios
        .get(`${dbUrl}/answers/${correctAnswerId}`)
        .then(res => res.data)
    },

    async qImgs({ qImgs }, args) {
      const images = await axios.get(`${dbUrl}/qImgs`).then(res => res.data)
      return images.filter(image => qImgs.includes(image.id))
    }
  }
}
