class notificationMockDB {
    constructor(){
        this.notification = [{
            notificationId : 0,
            title : 'title',
            description : 'description',
            active : true,
            priority : 0
        }];
    }

    async create(body) {
        if (typeof body === 'object') {
            this.notification.push(body);
            return body;
        } else {
            return null;
        }
    }

    async update(body, parameters ){
        let response = this.notification.find((notification) => notification.notificationId == parameters.where.notificationId);
        let bodyKeys = Object.keys(body);
        bodyKeys.forEach((key) => { response[key] = body[key]; });
        return response;
    }

    async findAll(){
        return this.notification;
    }

    async findByPk(notificationId){
        return this.notification.find((notification) => notification.notificationId == notificationId);
    }
}

class notificationRecordMockDB {
    constructor(){
        this.notificationRecord = [{
            timestamp : '2022-11-23 15:25:50.820',
            notificationId : 3,
            iddsps : true,
            rut : '938411441',
            idpaymenttrx: 1829,
            state: 'COMPLETED',
            updateTimestamp: '2022-11-23 12:57:37.000',
            userRut: '168410069',
            payment_description: 'VUELTO',
            cashPaymentId: 814,
            peopleRut: '168410069'
        }]
    }

    async create(body) {
        if (typeof body === 'object') {
            this.notificationRecord.push(body);
            return body;
        } else {
            return null;
        }
    }

    async update(body, parameters ){
        let response = this.notificationRecord.find((notificationRecord) => notificationRecord.notificationRecordId == parameters.where.notificationRecordId);
        let bodyKeys = Object.keys(body);
        bodyKeys.forEach((key) => { response[key] = body[key]; });
        return response;
    }

    async findAll(){
        return this.notificationRecord;
    }

    async findByPk(notificationRecordId){
        return this.notificationRecord.find((notificationRecord) => notificationRecord.notificationRecordId == notificationRecordId);
    }
}

class models{
    constructor(){
        this.notification = new notificationMockDB();
        this.notification_record = new notificationRecordMockDB();
    }
}

class sequelize{
    constructor(){
        this.models = new models();
    }
}

const db = {};
db.sequelize = new sequelize();

module.exports = db;