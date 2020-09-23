import React from 'react';
import { connect } from 'react-redux';
import { ConnectedEventList } from './EventList';

export const Dashboard = ({ teams }) => (
    <div>
        <h3>Test area</h3>
        {
            teams.map(team => (
                <ConnectedEventList key={team.id} id={team.id} name={team.name} />
            ))
        }
    </div>
);

function mapStateToProps(state) {
    return {
        teams: state.teams
    };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
