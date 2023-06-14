const db = require("smx-orm");
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');
const { getAuth, signInAnonymously} = require('firebase/auth');

class BaseController {
    constructor() {
        this.model = db.sequelize.models;
        // FIREBASE CONFIGURATION
        this.firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DATABASE_URL,
            projectId: process.env.FIREBASE_PROYECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID
        };
        // FIREBASE INIT
        const app = initializeApp(this.firebaseConfig);
        const auth = getAuth(app);
       
        signInAnonymously(auth).then(()=>{
           
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    
        this.database = getDatabase(app);
    }
}

module.exports = BaseController;