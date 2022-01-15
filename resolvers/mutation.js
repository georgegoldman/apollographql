module.exports =    { 
    toggleFavoriteSession: (parent, {id}, {dataSources}, info) => {
    return dataSources.sessionAPI.getSessionById(id);
    }
}