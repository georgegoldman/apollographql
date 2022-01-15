const { gql }  = require('apollo-server')

module.exports = gql`
type Query {
    sessions(    
        id: ID,
        title: String,
        description: String,
        startAt:String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String @deprecated(reason: " do not fit into a single track, we will be migrating to a tag bases system in the future"),
        level: String): [Session],
    sessionById(id:ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}

type Mutation{
    toggleFavoriteSession(id: ID): Session
}

type Speaker {
    id: ID!
    bio: String
    name: String
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
    track: String,
    level: String
    favorite: Boolean
    speakers: [Speaker]
}`