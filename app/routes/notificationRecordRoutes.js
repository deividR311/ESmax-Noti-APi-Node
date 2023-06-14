const express = require('express');

const NotificationRecordService = require('../services/notificationRecord.service');
const notificationRecordService = new NotificationRecordService;

const router = express.Router();

router.post('/create', notificationRecordService.createNotificationRecord);
router.post('/createConfirmation', notificationRecordService.createConfirmationNotificationRecord);
router.put('/update/:id', notificationRecordService.updateNotificationRecord);
router.get('/getAll', notificationRecordService.getAllNotificationRecord);
router.get('/get/:id', notificationRecordService.getNotificationRecord);
router.get('/getDetail/:id', notificationRecordService.getNotificationRecordDetail);
router.delete('/delete/:id', notificationRecordService.deleteNotificationRecord);

module.exports = router;