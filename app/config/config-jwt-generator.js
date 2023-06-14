const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const path = require('path');

// parsea el .env relativo al directorio de este modulo
const result = dotenv.config({ path: path.resolve(__dirname, './.env') });

// verifica si hubo error
if (result.error) {
  throw new Error('No fue posible configurar el ambiente para JWT. Error: ' + result.error);
}

// expande variables del .env
dotenvExpand(result);

module.exports = {
    jwtsecret: process.env.JWT_JWTSECRET,
    tokenexpires: process.env.JWT_TOKENEXPIRES
};