import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connectDB';
import './initDB';
import { authenticationRoute } from './authenticate';

const port = 7777;
const app = express();

app.listen(port, console.info("Server running, listening on port ", port));

app.use(
    cors(),
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json()
);

authenticationRoute(app);

export const addNewEvent = async event => {
    const db = await connectDB();
    const collection = db.collection('events');
    await collection.insertOne(event);
};

export const updateEvent = async event => {
    const {id, name} = event;
    const db = await connectDB();
    const collection = db.collection('events');

    if(name) {
        await collection.updateOne({id}, {$set:{name}});
    }
};

app.post('/event/new', async (req, res) => {
    const event = req.body.event;
    await addNewEvent(event);
    res.status(200).send();
});

app.post('/event/update', async (req, res) => {
    const event = req.body.event;
    await updateEvent(event);
    res.status(200).send();
});
