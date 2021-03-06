import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
        session(userSession = defaultState.session || {}, action) {
            let {type, authenticated, session} = action;
            switch (type) {
                case mutations.SET_STATE:
                    return {...userSession, id: action.state.session.id};
                case mutations.REQUEST_AUTHENTICATE_USER:
                    return {...userSession, authenticated: mutations.AUTHENTICATED};
                case mutations.PROCESSING_AUTHENTICATE_USER:
                    return {...userSession, authenticated};
                default:
                    return userSession;
            }
        },
        events(events = [], action) {
            switch (action.type) {
                case mutations.SET_STATE:
                    return action.state.events;
                case mutations.CREATE_EVENT:
                    return [...events, {
                        id: action.eventId,
                        name: "New event",
                        team: action.teamId,
                        owner: action.ownerId,
                        date: '2020-09-25'
                    }]
                    break;

                default:
                    break;
            }
            return events
        },
        comments(comments = []) {
            return comments;
        },
        teams(teams = [], action) {
            switch(action.type) {
                case mutations.SET_STATE:
                    return action.state.teams;
            }
            return teams;
        },
        users(users = []) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}
