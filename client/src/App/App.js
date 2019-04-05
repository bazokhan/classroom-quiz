import React, { Component } from 'react'
import './App.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

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
      prologue
      main
      answers {
        body
      }
      qImgs {
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
        <p>Hello World</p>
      </header>

      <div className="App-intro">
        <ul>
          {data.questions &&
            data.questions.map(
              ({ prologue, main, answers, qImgs, correctAnswer }, index) => {
                return (
                  <div>
                    <h1>Question No. {index}</h1>
                    <p>{prologue}</p>
                    {qImgs &&
                      qImgs.map((img, index) => {
                        return (
                          <div>
                            <h2>Image No. {index}</h2>
                            <p>Comment: {img.comment}</p>
                          </div>
                        )
                      })}
                    <h2>{main}</h2>
                    <ui>
                      {answers &&
                        answers.map(answer => {
                          return <li>{answer.body}</li>
                        })}
                    </ui>
                    <h2>The Correct Answer Is: {correctAnswer.body}</h2>
                  </div>
                )
              }
            )}
        </ul>
      </div>
    </div>
  )
}

export default graphql(TEST_QUERY)(App)
