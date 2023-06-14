const dotenv = require('dotenv');
const path = require('path');

// parsea el .env relativo al directorio de este modulo
const result = dotenv.config({ path: path.resolve(__dirname, './.env') });

// verifica si hubo error
if (result.error) {
  throw new Error('No fue posible configurar el ambiente para la api. Error: ' + result.error);
}

// si no esta en produccion, el default appender es archivo
let defaultAppender;
if ((process.env.NODE_ENV || 'production').trim().toLowerCase() !== 'production') {
    defaultAppender = 'fileAppender';
}else{
    defaultAppender = 'consoleAppender';
}

const appSettings = {
    log4js: {
        traceLogConfig: {
            appenders: {
                fileAppender: {
                    type: 'dateFile',
                    filename: './logs/smx-fsn-api.log',
                    compress: false
                },
                consoleAppender: {
                    type: 'console'
                }
            },
            categories: {
                default: {
                    appenders: [defaultAppender], //['fileAppender'],
                    level: 'trace'
                }
            }
        }
    },
    HTTPS: {
        port: process.env.HTTPS_PORT
    },
    HTTP: {
        port: process.env.HTTP_PORT
    },
    use_http_ifnot_https: process.env.USE_HTTP_IFNOT_HTTPS
};

module.exports = appSettings;
