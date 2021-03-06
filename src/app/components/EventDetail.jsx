import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const EventDetail = ({id, event, teams}) => (
    <div className="card p-3 col-6">
        <h3>{event.name} - {event.date}</h3>

        <div>
            <button>Coment</button>
        </div>
        <br />

        <div>
            <select>
                {teams.map(team => (
                    <option key={team.id} value={team.id}>
                        {team.name}
                    </option>
                ))}
            </select>
        </div>
        <br />

        <div>
            <Link to="/dashboard" className="btn btn-primary mt-2">
                <button>Done</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let event = state.events.find(event => event.id === id);
    let teams = state.teams;

    return {
        id,
        event,
        teams,
        isComplete: event.isComplete
    }
};

export const ConnnectedEventDetail = connect(mapStateToProps)(EventDetail);
