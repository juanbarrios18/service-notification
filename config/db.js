const mongoose = require('mongoose')
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notification-service'

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info(`Connected to MongoDB:  ${URI}`))
  .catch(error => console.error(`An error ocurred trying to connect to de database ${URI}`, error))

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination')
    process.exit(0)
  })
})
