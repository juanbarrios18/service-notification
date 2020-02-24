const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
  title: String,
  message: String,
  type: String,
  userId: String,
  read: {
    type: Boolean,
    deafult: false
  },
  created: {
    type: Date,
    default: Date.now()
  },
  updated: {
    type: Date,
    default: Date.now()
  }
})

const Notification = mongoose.model('Notification', notificationSchema)

module.exports = Notification
