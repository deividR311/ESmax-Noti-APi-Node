const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

let corsOptions = {
    origin : [
        'https://autoservicio.petrobrasdistribucion.cl',
        'https://esmax-pwa-dev.azurefd.net',
        'https://esmax-pwa-qa.azurefd.net'
    ]
};

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // MIDDLEWARES
        this.middlewares();

        // ROUTES
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // READ AND CONVERT THE BODY
        this.app.use( express.json() );

        this.app.disable('x-powered-by');

        this.app.use(helmet.hidePoweredBy());
    }

    routes() {
        this.app.use('/notification', require('../routes/notificationRoutes'));
        this.app.use('/notificationRecord', require('../routes/notificationRecordRoutes'));
        this.app.use('/notificationCashPayment', require('../routes/notificationCashPaymentRoutes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on the port', this.port);
        })
    }
}

module.exports = Server;