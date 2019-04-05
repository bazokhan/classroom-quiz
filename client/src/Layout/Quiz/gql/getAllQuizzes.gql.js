import gql from 'graphql-tag'

const getAllQuizzes = gql`
  query {
    questions {
      id
      prologue
      main
      answers {
        id
        body
      }
      qImgs {
        id
        comment
      }
      correctAnswer {
        body
      }
    }
  }
`

export default getAllQuizzes