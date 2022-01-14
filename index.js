const { ApolloServer, gql } = require('apollo-server')
const SessionAPI = require('./datasources/sessions')

const typeDefs = require('./schema')

const resolvers = require('./resolvers')

const dataSources = () => ({
    sessionAPI : new SessionAPI()
})
const server = new ApolloServer({ 
    typeDefs, resolvers, dataSources, introspection: false,
 })

server.listen(
    {
        port: process.env.PORT || 4000
    }
)
.then( ({ url }) => {
    console.log(`graphql running at ${url}`)
} )