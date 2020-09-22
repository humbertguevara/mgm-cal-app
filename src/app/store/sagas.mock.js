import { take, put, seltect } from 'redux-saga/effects';
import * as mutations from './mutations';
import uuid from 'uuid';

export function* eventCreationSaga() {
    while (true) {
        const {teamId} = yield take(mutations.REQUEST_EVENT_CREATION);
        const ownerId = 'U1';
        const eventId = uuid();
        yield put(mutations.createEvent(eventId, teamId, ownerId));
        console.log("Got team ID...", teamId);
    }
}
