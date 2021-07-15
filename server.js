/* 
  contains all the server config, DB connection,
  port settings etc
*/

const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' })

// DB connection
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

mongoose.Promise = global.Promise // Tell mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`Database connection error -> ${err.message}`)
})

// require the models here so that it can be accessed throughout the app
require('./app/models/Posts')

// require app.js
const app = require('./app')

// start the server on port 3000
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Express running at PORT ${port}`))
