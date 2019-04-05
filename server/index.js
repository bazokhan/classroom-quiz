const { GraphQLServer } = require('graphql-yoga')
const { port, environment } = require('./constants')
const express = require('express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new GraphQLServer({ typeDefs, resolvers })

server.express.use('/website', express.static('static'))

server
  .start(
    {
      port
    },
    ({ port }) => {
      console.log(
        `${environment} Server Started At Port ${port}`
      )
      console.log(`Press CTRL + C To Exit..`)
    }
  )
  .catch(err => console.error('connection Error', err))
