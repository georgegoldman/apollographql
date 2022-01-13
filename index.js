const { ApolloServer, gql } = require('apollo-server')
const SessionAPI = require('./datasources/sessions')

const typeDefs = gql`
type Query {
    sessions: [Session]
}
type Session {
    id: ID!
    title: String!,
    description: String,
    startAt:String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: " do not fit into a single track, we will be migrating to a tag bases system in the future"),
    level: String
}`

const resolvers = {
    Query: {
        sessions: (parent, args, {dataSources}, info)=> {
            return dataSources.sessionAPI.getSessions()
        }
    }
}

const dataSources = () => ({
    sessionAPI : new SessionAPI()
})
const server = new ApolloServer({typeDefs, resolvers, dataSources})

server.listen(
    {
        port: process.env.PORT || 4000
    }
)
.then( ({ url }) => {
    console.log(`graphql running at ${url}`)
} )