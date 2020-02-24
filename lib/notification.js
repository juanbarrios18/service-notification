const notificationModel = require('../models/notification')

class Notification {
  create (body) {
    return new Promise((resolve, reject) => {
      notificationModel.create(body)
        .then(notification => {
          resolve(notification)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getAll () {
    return new Promise((resolve, reject) => {
      notificationModel.find()
        .then(notification => resolve(notification))
        .catch(err => reject(err))
    })
  }

  getAllByUser (userId) {
    return new Promise((resolve, reject) => {
      notificationModel.find({ userId: userId })
        .then(notifications => resolve(notifications))
        .catch(err => reject(err))
    })
  }

  getOneByUser (userId, notificationId) {
    return new Promise((resolve, reject) => {
      notificationModel.find({ _id: notificationId, userId: userId })
        .then(notification => resolve(notification))
        .catch(err => reject(err))
    })
  }

  getOne (id) {
    return new Promise((resolve, reject) => {
      notificationModel.findById({ _id: id })
        .then(notification => resolve(notification))
        .catch(err => reject(err))
    })
  }

  update (id, body) {
    return new Promise((resolve, reject) => {
      notificationModel.findOneAndUpdate({ _id: id, body })
        .then(notification => resolve(notification))
        .catch(err => reject(err))
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      notificationModel.findByIdAndDelete(id)
        .then(notification => resolve(notification))
        .catch(err => reject(err))
    })
  }
}

module.exports = Notification
