const Notification = require('../lib/notification')
const newNotification = new Notification()

module.exports.getAll = (_, res, next) => {
  newNotification.getAll()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(next)
}

module.exports.getOne = (req, res, next) => {
  newNotification.getOne(req.params.id)
    .then(notification => {
      res.status(200).json(notification)
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  newNotification.create(req.body)
    .then(notification => {
      res.status(200).json(notification)
    })
    .catch(next)
}

module.exports.getOneByUser = (req, res, next) => {
  newNotification.getOneByUser(req.params.userId, req.params.id)
    .then(notification => {
      res.status(200).json(notification)
    })
    .catch(next)
}

module.exports.getAllByUser = (req, res, next) => {
  newNotification.getAllByUser(req.params.userId)
    .then(notifications => {
      res.status(200).json(notifications)
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  newNotification.delete(req.params.id)
    .then(notification => {
      res.status(200).json(notification)
    })
    .catch(next)
}

module.exports.update = (req, res, next) => {
  newNotification.update(req.params.id, req.body)
    .then(notification => {
      res.status(200).json(notification)
    })
    .catch(next)
}
