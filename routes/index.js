var member_route = require('./members')


module.exports = function (app) {
    app.use('/members', member_route)
}
