import gql from 'graphql-tag'

const submitQuiz = gql`
  mutation ADD_RESULT($testId: ID!, $answers: [Int!]!) {
    addResult(testId: $testId, answers: $answers) {
      id
      test {
        id
        name
        questions {
          id
          main
        }
      }
      answers
    }
  }
`

export default submitQuiz
