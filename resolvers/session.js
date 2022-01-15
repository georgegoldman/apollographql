const { ApolloError } = require('apollo-server')
const _ = require('lodash')

module.exports = {
    async speakers(session, args, {dataSources}){
        try {
            const speakers = await dataSources.speakerAPI.getSpeakers()
            const returns = speakers.filter((speaker) => {
                return _.filter(session.speakers, {id: speaker.id}).length > 0
            })

        return returns
        } catch (error) {
            return new ApolloError("unable to retrieve speakers", "SPEAKER_API_ERROR", 
            {
                token: "UNIQUETOKEN"
            })
        }
    }
}