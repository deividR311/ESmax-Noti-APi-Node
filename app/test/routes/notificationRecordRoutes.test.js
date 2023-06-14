const supertest = require('supertest');
const express = require('express');
const notificationRecordRouter = require('../../routes/notificationRecordRoutes');
const HttpMessage = require('../../shared/httpmessages');

const app = express();

app.use(express.json())
app.use('/notificationRecord', notificationRecordRouter);

describe("notificationRecord router test", () =>{
    let request = null;
    let notificationRecordRoute = "/notificationRecord";
    let httpMessage = null;
    
    beforeAll(async () =>{
        request = supertest(app);
        httpMessage = new HttpMessage;
    });

    test("Get notificationRecords", async () =>{
        let success = httpMessage.success;
        let res = await request.get(`${notificationRecordRoute}/getAll`);

        expect(res.body.data).not.toBeNull();
        expect(res.body.data.length).toBeGreaterThan(0);
        expect(res.body.status).toEqual(success);
    });

    test("Get notificationRecords by Id", async () =>{
        let success = httpMessage.success;
        let notificationRecordId = 0;
        let res = await request.get(`${notificationRecordRoute}/get/${notificationRecordId}`);

        expect(res.body.data).not.toBeNull();
        expect(res.body.status).toEqual(success);
    });
});