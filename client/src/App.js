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

class App extends Component {
  render() {
    // TODO:
    if (this.props.data.loading) {
      return <div>Loading</div>
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
        </header>

        {/* TODO */}
        <div className="App-intro">
          <ul>
            {this.props.data.users &&
              this.props.data.users.map((user, index) => {
                return (
                  <li key={index}>
                    {user.id}
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    )
  }
}

export default graphql(USERS_QUERY)(App)
