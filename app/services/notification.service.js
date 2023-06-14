const BaseService = require('./base.service');
const NotificationController = require('../controllers/notificationController');

class NotificationService extends BaseService {
    constructor() {
        super();
        this.notificationController = new NotificationController;
    }

    createNotification = async (req, res) => {
        try {
            const { body } = req;
            let response = await this.notificationController.createNotification(body);
            res.status(this.httpCode.created).json({
                status: this.httpMessage.success,
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

    updateNotification = async (req, res) => {
        try {
            const { body, params } = req;
            let response = await this.notificationController.updateNotification(body, params.id);
            res.status(this.httpCode.created).json({
                status: this.httpMessage.success,
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

    getAllNotification = async (req, res) => {
        try {
            let response = await this.notificationController.getAllNotification();
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
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

    getNotification = async (req, res) => {
        try {
            const { params } = req;
            let response = await this.notificationController.getNotification(params.id);
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
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

    enableDisableNotification = async (req, res) => {
        try {
            const { body, params } = req;
            let response = await this.notificationController.enableDisableNotification(body.active, params.id);
            res.status(this.httpCode.created).json({
                status: this.httpMessage.success,
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

    deleteNotification = async (req, res) => {
        try {
            const { params } = req;
            let response = await this.notificationController.deleteNotification(params.id);
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
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

module.exports = NotificationService;