const supertest = require('supertest');
const express = require('express');
const notificationRouter = require('../../routes/notificationRoutes');
const HttpMessage = require('../../shared/httpmessages');

const app = express();

app.use(express.json())
app.use('/notification', notificationRouter);

describe("notification router test", () =>{
    let request = null;
    let notificationRoute = "/notification";
    let httpMessage = null;
    
    beforeAll(async () =>{
        request = supertest(app);
        httpMessage = new HttpMessage;
    });

    test("Create notification", async () => {
        let success = httpMessage.success;
        let res = await request
        .post(`${notificationRoute}/create`)
        .send({
            "title" : 'title',
            "description" : 'description',
            "active" : true,
            "priority" : 0
        });

        expect(res.body.data).not.toBeNull();
        expect(res.body.status).toEqual(success);
    });

    test("Get notifications", async () =>{
        let success = httpMessage.success;
        let res = await request.get(`${notificationRoute}/getAll`);

        expect(res.body.data).not.toBeNull();
        expect(res.body.data.length).toBeGreaterThan(0);
        expect(res.body.status).toEqual(success);
    });

    test("Get notification by Id", async () =>{
        let success = httpMessage.success;
        let notificationId = 0;
        let res = await request.get(`${notificationRoute}/get/${notificationId}`);

        expect(res.body.data).not.toBeNull();
        expect(res.body.status).toEqual(success);
    });

    test("Update notification", async () => {
        let success = httpMessage.success;
        let notificationId = 0;
        let res = await request
        .put(`${notificationRoute}/update/${notificationId}`)
        .send({
            "title" : 'update'
        });

        expect(res.body.data).not.toBeNull();
        expect(res.body.status).toEqual(success);
    });
});