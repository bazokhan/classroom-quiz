import React, { useState } from 'react'
import styles from './Quiz.module.scss'
import getQuiz from './gql/getQuiz.gql'
import { Query } from 'react-apollo'
import Question from '../Question'

const Quiz = ({ id }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handleCurrentQuestion = (value, noOfQuestions) => {
    let nextQuestion = currentQuestion + value
    if (nextQuestion >= noOfQuestions) nextQuestion %= noOfQuestions
    if (nextQuestion < 0) nextQuestion = noOfQuestions - 1
    setCurrentQuestion(nextQuestion)
  }
  return (
    <Query query={getQuiz} variables={{ id }}>
      {({ data }) => {
        if (data.loading) return <div>Loading</div>
        const { test } = data
        if (!test) return <div>Loading</div>
        const { id, name, author, questions } = test
        return (
          <div className={styles.quizContainer}>
            <div className={styles.quizName}>{name}</div>
            <div className={styles.quizAuthor}>
              Author: {author.firstName} {author.lastName}
            </div>

            <div className={styles.quizBody}>
              {questions.length ? (
                <div>
                  <div className={styles.navigationButtons}>
                    <button
                      className={styles.navButton}
                      onClick={() =>
                        handleCurrentQuestion(-1, questions.length)
                      }
                    >
                      Previous
                    </button>
                    <button
                      className={styles.navButton}
                      onClick={() => handleCurrentQuestion(1, questions.length)}
                    >
                      Next
                    </button>
                  </div>
                  <Question
                    key={questions[currentQuestion].id}
                    question={questions[currentQuestion]}
                    index={currentQuestion}
                  />
                </div>
              ) : (
                <div>No question yet!</div>
              )}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Quiz
