const express = require('express')
const router = express.Router()
const notificationCtrl = require('../controllers/notification')

// NOTIFICATIONS
router.get('/notifications', notificationCtrl.getAll)
router.get('/notifications/:userId', notificationCtrl.getAllByUser)
router.get('/notifications/:userId/:id', notificationCtrl.getOneByUser)
router.get('/notifications/:id', notificationCtrl.getOne)
router.put('/notifications/:id', notificationCtrl.update)
router.delete('/notifications/:id', notificationCtrl.delete)
router.post('/notifications/new', notificationCtrl.create)

module.exports = router
