const BaseService = require('./base.service');
const NotificationRecordController = require('../controllers/notificationRecordController');

class NotificationRecordService extends BaseService {
    constructor() {
        super();
        this.notificationRecordController = new NotificationRecordController;
    }

    createNotificationRecord = async (req, res) => {
        const { body } = req;
        try {
            let response = await this.notificationRecordController.createNotificationRecord(body.data);
            await this.notificationRecordController.createNotificationRecordFirebase(body.info, response.notificationRecordId);

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
    createConfirmationNotificationRecord = async (req, res) => {
        const { body } = req;
        try {
           // let response = await this.notificationRecordController.createNotificationRecord(body.data);
            await this.notificationRecordController.createConfirmationRecordFirebase(body.info, body.notificationRecordId);

            res.status(this.httpCode.created).json({
                status: 'success',
                message: this.httpMessage.created,
                data: "response"
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




    getNotificationRecordDetail = async (req, res) => {
        try {
            const { params } = req;
            let response = await this.notificationRecordController.getNotificationRecordDetail(params.id);
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: this.httpMessage.serverError,
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }

    updateNotificationRecord = async (req, res) => {
        try {
            const { body, params } = req;
            let response = await this.notificationRecordController.updateNotificationRecord(body.data, params.id);
            await this.notificationRecordController.createNotificationRecordFirebase(body.info, params.id);
            res.status(this.httpCode.created).json({
                status: 'success',
                message: this.httpMessage.created,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: this.httpMessage.serverError,
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }

    getAllNotificationRecord = async (req, res) => {
        try {
            let response = await this.notificationRecordController.getAllNotificationRecord();
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: this.httpMessage.serverError,
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }

    getNotificationRecord = async (req, res) => {
        try {
            const { params } = req;
            let response = await this.notificationRecordController.getNotificationRecord(params.id);
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: this.httpMessage.serverError,
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }

    deleteNotificationRecord = async (req, res) => {
        try {
            const { params } = req;
            let response = await this.notificationRecordController.deleteNotificationRecord(params.id);
            res.status(this.httpCode.success).json({
                status: this.httpMessage.success,
                message: this.httpMessage.success,
                data: response
            });
        }
        catch (err) {
            res.status(this.httpCode.serverError).json({
                status: this.httpMessage.serverError,
                message: this.httpMessage.serverError,
                data: err
            });
        }
    }
}

module.exports = NotificationRecordService;