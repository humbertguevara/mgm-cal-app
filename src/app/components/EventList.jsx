import React from 'react';
import { connect } from 'react-redux';
import { requestEventCreation } from '../store/mutations';

export const EventList = ({ events, name, teamId, createNewEvent}) => (
    <div>
        <h3>{name} - Testing 1</h3>
        <div>
            {events.map(event => (
                <div key={event.id}>
                    {event.date} - {event.name}
                </div>
            ))}
        </div>
        <button onClick={() => createNewEvent(teamId)}>Add Event</button>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.id;
    return {
        name: ownProps.name,
        teamId: id,
        events: state.events.filter(event => event.team === id),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewEvent(id) {
            console.log("Creating new task ....", id);
            dispatch(requestEventCreation(id));
        }
    }
}

export const ConnectedEventList = connect(mapStateToProps, mapDispatchToProps)(EventList);
