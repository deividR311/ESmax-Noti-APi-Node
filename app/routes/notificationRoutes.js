const express = require('express');

const NotificationService = require('../services/notification.service');
const notificationService = new NotificationService;

const router = express.Router();

router.post('/create', notificationService.createNotification);
router.put('/update/:id', notificationService.updateNotification);
router.get('/getAll', notificationService.getAllNotification);
router.get('/get/:id', notificationService.getNotification);
router.put('/enableDisable/:id', notificationService.enableDisableNotification);
router.delete('/delete/:id', notificationService.deleteNotification);

module.exports = router;