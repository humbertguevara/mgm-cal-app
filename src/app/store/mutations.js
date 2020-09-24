export const REQUEST_EVENT_CREATION = 'REQUEST_EVENT_CREATION';
export const CREATE_EVENT = 'CREATE_EVENT';
export const REQUEST_AUTHENTICATE_USER = 'REQUEST_AUTHENTICATE_USER';
export const PROCESSING_AUTHENTICATE_USER = 'PROCESSING_AUTHENTICATE_USER';
export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
export const SET_STATE = 'SET_STATE';

export const requestEventCreation = (teamId) => ({
    type: REQUEST_EVENT_CREATION,
    teamId
});

export const createEvent = (eventId, teamId, ownerId) => ({
    type: CREATE_EVENT,
    eventId,
    teamId,
    ownerId
});

export const requestAuthenticateUser = (username, password) => ({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processAuthenticateUser = (status = AUTHENTICATING, session = null)=>({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});

export const setState = (state = {}) => ({
    type: SET_STATE,
    state
});
