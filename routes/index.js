var member_route = require('./members')
var namaz_route = require('./namaz')

module.exports = function (app) {
    app.use('/members', member_route)
    app.use('/namaz-times', namaz_route)
}
