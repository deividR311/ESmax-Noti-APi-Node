const path = require('path');
require ('dotenv').config({ path: path.resolve(__dirname, './app/config/.env') });
const Server = require('./app/classes/server');

const server = new Server();

try {
    server.listen();
} catch (error) {
    console.log(error);
}
