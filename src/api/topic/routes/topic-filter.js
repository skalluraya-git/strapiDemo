module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/topics/filter',
            handler: 'topic.filter',
            config: {
                auth: false
            }
        }
    ]
}