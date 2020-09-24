
import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';
import { history } from './history'
import * as mutations from './mutations';

const url = 'http://localhost:7777';

export function* eventCreationSaga() {
    while (true) {
        const {teamId} = yield take(mutations.REQUEST_EVENT_CREATION);
        const ownerId = 'U1';
        const eventId = uuid();
        yield put(mutations.createEvent(eventId, teamId, ownerId));
        const { res } = yield axios.post(url + '/event/new', {
            event: {
                name: "New event",
                id: eventId,
                team: teamId,
                owner: ownerId,
                date: '2020-09-22',
                isComplete: false,
            }
        });
        console.info("Got response, ", res);
    }
}

// export function* commentCreationSaga(){
//     while (true) {
//         const comment = yield take (mutations.ADD_TASK_COMMENT);
//         axios.post(url + `/comment/new`,{comment})
//     }
// }

// export function* taskModificationSaga(){
//     while (true){
//         const task = yield take([mutations.SET_TASK_GROUP, mutations.SET_TASK_NAME,mutations.SET_TASK_COMPLETE]);
//         axios.post(url + `/task/update`,{
//             task:{
//                 id:task.taskID,
//                 group:task.groupID,
//                 name:task.name,
//                 isComplete:task.isComplete
//             }});
//     }
// }

export function* userAuthenticationSaga(){
    while (true){
        const {username, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = axios.post(url + '/authenticate', {username, password});
            if (!data) {
                throw new Error();
            }
        } catch (e) {
            console.log("Can't authenticate");
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
        }
    }
}


// export function* userAccountCreationSaga(){
//     while (true) {
//         const {username, password } = yield take(mutations.REQUEST_USER_ACCOUNT_CREATION);
//         try {
//             const { data } = yield axios.post(url + `/user/create`, {username,password});
//             console.log(data);

//             yield put(mutations.setState({...data.state,session:{id:data.userID}}));
//             yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));

//             history.push('/dashboard');

//         } catch (e) {
//             console.error("Error",e);
//             yield put(mutations.processAuthenticateUser(mutations.USERNAME_RESERVED));
//         }
//     }
// }
