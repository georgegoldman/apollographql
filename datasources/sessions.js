const sessions = require('../data/sessions.json')
const { DataSource } = require('apollo-datasource')

class SessionsAPI extends DataSource {
    constructor () {
        super()
    }

    initialize(config) {

    }

    getSessions() {
        
    }
}

module.exports = SessionsAPI