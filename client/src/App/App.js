import React, { Component } from 'react'
import './App.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Question from '../Layout/Question'

const USERS_QUERY = gql`
  query {
    users {
      id
      firstName
      lastName
    }
  }
`

const TEST_QUERY = gql`
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

const App = ({ data }) => {
  if (data.loading) return <div>Loading</div>
  return (
    <div className="App">
      <header className="App-header">
        <p>ClassRoom Quiz</p>
      </header>

      <div className="App-intro">
        <ul>
          {data.questions &&
            data.questions.map(
              ({ id, prologue, main, answers, qImgs, correctAnswer }, index) => (
                <Question
                  id={id}
                  key={id}
                  prologue={prologue}
                  main={main}
                  answers={answers}
                  qImgs={qImgs}
                  correctAnswer={correctAnswer}
                  index={index}
                />
              )
            )}
        </ul>
      </div>
    </div>
  )
}

export default graphql(TEST_QUERY)(App)
