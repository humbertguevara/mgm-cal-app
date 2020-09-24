import React from 'react';
import { connect } from 'react-redux';
import { requestEventCreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const EventList = ({ events, teamName, teamId, createNewEvent}) => (
    <div className="card p-2 m-2">
        <h3>{teamName}</h3>
        <div>
            {events.map(event => (
                <Link to={`/event/${event.id}`} key={event.id} >
                    <div>
                        {event.date} - {event.name}
                    </div>
                </Link>
            ))}
        </div>
        <button className="btn btn-primary btn-block mt-2"
            onClick={() => createNewEvent(teamId)}>
                Add Event
        </button>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let teamId = ownProps.id;
    return {
        teamName: ownProps.name,
        teamId: teamId,
        events: state.events.filter(event => event.team === teamId),
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
