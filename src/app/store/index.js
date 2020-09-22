import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock';
import * as mutations from './mutations';

export const store = createStore(
    combineReducers({
        events(events = defaultState.events, action) {
            switch (action.type) {
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
        comments(comments = defaultState.comments) {
            return comments;
        },
        teams(teams = defaultState.teams) {
            return teams;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}
