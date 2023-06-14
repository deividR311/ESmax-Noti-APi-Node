const BaseController = require("./baseController");
const { ref, set } = require("firebase/database");

class NotificationCashPaymentController extends BaseController {
    constructor() {
        super();
    }

    createNotificationCashPaymentFirebase = async ( body, cashPaymentId ) => {
        return await set(ref(this.database, `/cashPayment-${body.ideess}/${cashPaymentId}`), {
            ...body.response, cashPaymentId
        });
    }
}

module.exports = NotificationCashPaymentController;