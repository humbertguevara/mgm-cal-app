export const REQUEST_EVENT_CREATION = 'REQUEST_EVENT_CREATION';
export const CREATE_EVENT = 'CREATE_EVENT';

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
