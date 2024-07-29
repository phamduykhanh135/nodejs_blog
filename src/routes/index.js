const newRowter = require('./news')
const siteRowter = require('./site')
function route(app){

    app.use('/news',newRowter)
    app.use('/',siteRowter)

}
module.exports=route;