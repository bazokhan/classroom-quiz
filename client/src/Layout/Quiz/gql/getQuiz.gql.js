import gql from 'graphql-tag'

const getQuiz = gql`
  query TEST_QUERY($id: ID!) {
    test(id: $id) {
      id
      name
      author {
        id
        firstName
      }
	  questions {
        id
        prologue
        main
        qImgs {
          id
          url
          comment
        }
        answers {
          id
          body
        }
        correctAnswer {
          id
          body
        }
      }
    }
  }
`

export default getQuiz
