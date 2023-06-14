const express = require('express');
const NotificationCashPaymentService = require('../services/notificationCashPayment.service');
const notificationCashPaymentService = new NotificationCashPaymentService;

const router = express.Router();

router.put('/create/:id', notificationCashPaymentService.createNotificationCashPaymentFirebase);

module.exports = router;