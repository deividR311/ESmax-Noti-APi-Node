const BaseController = require("./baseController");

class NotificationController extends BaseController {
    constructor() {
        super();
        this.notificationModel = this.model.notification;
    }

    createNotification = async (body) => {
        try {
            let notification = await this.notificationModel.create({ ...body });
            return notification;
        }
        catch(err) {
            throw err;
        }
        
    }

    updateNotification = async (body, id) => {
        try {
            await this.notificationModel.update({ ...body }, { where: { notificationId: id } });
            let notification = this.notificationModel.findByPk(id);
            return notification;
        }
        catch(err) {
            throw err;
        }
    }

    getAllNotification = async () => {
        try {
            let notification = await this.notificationModel.findAll();
            return notification;
        }
        catch (err) {
            throw err;
        }
    }

    getNotification = async (id) => {
        try {
            let notification = await this.notificationModel.findByPk(id);
            return notification;
        }
        catch (err) {
            throw err;
        }
    }

    enableDisableNotification = async (body, id) => {
        try {
            await this.notificationModel.update({ active : body }, { where: { notificationId: id } });
            let notification = this.notificationModel.findByPk(id);
            return notification;
        }
        catch(err) {
            throw err;
        }
    }

    deleteNotification = async (id) => {
        try {
            let notification = await this.notificationModel.destroy({ where: { notificationId: id }});
            return notification;   
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = NotificationController;