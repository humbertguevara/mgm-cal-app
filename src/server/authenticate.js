import uuid from 'uuid';
import md5 from 'md5';
import { connectDB } from './connectDB';

const authenticationTokens = [];

async function assembleUserState(user) {
    let db = await connectDB();

    let events = await db.collection('events').find({team:user.team}).toArray();
    let teams = await db.collection('teams').find({id:user.team}).toArray();

    return {
        events,
        teams,
        session: {
            authenticated: 'AUTHENTICATED',
            id: user.id
        }
    }

}

export const authenticationRoute = app => {
    app.post('/authenticate', async (req, res) => {
        let {username, password} = req.body;
        let db = await connectDB();
        let collection = db.collection('users');

        let user = await collection.findOne({name: username});

        if (!user) {
            return res.status(500).send("User not found");
        }

        let hash = md5(password);
        let passwordOK = hash === user.passwordHash;

        if (!passwordOK) {
            return res.status(500).send("Password incorrect");
        }

        let token = uuid();
        authenticationTokens.push({
            token,
            userID: user.id
        });

        let state = await assembleUserState(user);
        res.send({token, state});
    });
};
