const BaseController = require("./baseController");
const { ref, set } = require("firebase/database");

class NotificationRecordController extends BaseController {
    constructor() {
        super();
        this.notificationRecordModel = this.model.notification_record;
        this.dspsModel = this.model.dsps;
        this.usuariosModel = this.model.usuarios;
        this.cashPaymentModel = this.model.cash_payment;
        this.notificationModel = this.model.notification;
        this.atendedoresModel = this.model.atendedores;
        this.personasModel = this.model.personas;
    }

    createNotificationRecordFirebase = async ( body, notificationRecordId ) => {
        return await set(ref(this.database, `/notification-${body.ideess}/${notificationRecordId}`), {
            ...body, notificationRecordId
        });
    }

    createConfirmationRecordFirebase = async ( body, notificationRecordId ) => {
        return await set(ref(this.database, `/confirmation-${body.ideess}/${notificationRecordId}`), {
            ...body, notificationRecordId
        });
    }

    createNotificationRecord = async (body) => {
        try {
            let notificationRecord = await this.notificationRecordModel.create({ ...body });
            return notificationRecord;
        }
        catch(err) {
            throw err;
        }
    }

    getNotificationRecordDetail = async ( id ) => {
        try {
            let notificationRecord = this.notificationRecordModel.findByPk(id, { include: [
                { model: this.dspsModel },
                { model: this.personasModel },
                { model: this.usuariosModel },
                { model: this.cashPaymentModel },
                { model: this.notificationModel },
                { model: this.atendedoresModel }
            ]});

            return notificationRecord;
        } catch (err) {
            throw err;
        }
    }

    updateNotificationRecord = async (body, id) => {
        try {
            await this.notificationRecordModel.update({ ...body }, { where: { notificationRecordId: id } });
            let notificationRecord = this.notificationRecordModel.findByPk(id);
            return notificationRecord;
        }
        catch(err) {
            throw err;
        }
    }

    getAllNotificationRecord = async () => {
        try {
            let notificationRecord = await this.notificationRecordModel.findAll();
            return notificationRecord;
        }
        catch (err) {
            throw err;
        }
    }

    getNotificationRecord = async (id) => {
        try {
            let notificationRecord = await this.notificationRecordModel.findByPk(id);
            return notificationRecord;
        }
        catch (err) {
            throw err;
        }
    }

    deleteNotificationRecord = async (id) => {
        try {
            let notificationRecord = await this.notificationRecordModel.destroy({ where: { notificationRecordId: id }});
            return notificationRecord;
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = NotificationRecordController;