const BaseService = require('./base.service');
const NotificationCashPaymentController = require('../controllers/notificationCashPaymentController');

class NotificationCashPaymentService extends BaseService {
    constructor() {
        super();
        this.notificationCashPaymentController = new NotificationCashPaymentController;
    }

    createNotificationCashPaymentFirebase = async (req, res) => {
        try {
            const { body, params } = req;
            let response = await this.notificationCashPaymentController.createNotificationCashPaymentFirebase(body, params.id);
            res.status(this.httpCode.created).json({
                status: 'success',
                message: this.httpMessage.created,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: 'error',
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }
}

module.exports = NotificationCashPaymentService;