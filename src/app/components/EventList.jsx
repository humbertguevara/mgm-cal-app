import React from 'react';
import { connect } from 'react-redux';

export const EventList = ({ events, name }) => (
    <div>
        <h3>{name}</h3>
        <div>
            {events.map(event => (
                <div>{event.date} - {event.name}</div>
            ))}
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let teamId = ownProps.id;
    return {
        name: ownProps.name,
        id: teamId,
        events: state.events.filter(event => event.team === teamId),
    };
};

export const ConnectedEventList = connect(mapStateToProps)(EventList);
