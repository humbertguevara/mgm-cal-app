import uuid from 'uuid';
import md5 from 'md5';
import { connectDB } from './connectDB';
import chalk from 'chalk';

const authenticationTokens = [];

async function assembleUserState(user) {
    let db = await connectDB();
    let events = await db.collection('events').find({team:user.team}).toArray();
    let teams = await db.collection('teams').find({id:user.team}).toArray();

    return {
        events,
        teams,
        session: {
            authenticated: `AUTHENTICATED`,
            id: user.id
        }
    }

}

export const authenticationRoute = app => {
    app.post('/authenticate', async (req, res) => {
        let {username, password} = req.body;
        let db = await connectDB();
        let usersCollection = db.collection(`users`);

        let user = await usersCollection.findOne({
            name: username
        });

        if(!user) {
            console.log(chalk.red("User not found"));
            return res.status(500).send("User not found");
        }

        let hash = md5(password);
        let passwordOK = hash === user.passwordHash;

        if (!passwordOK) {
            console.log(chalk.red("Password incorrect"));
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
