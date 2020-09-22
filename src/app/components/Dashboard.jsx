import React from 'react';
import { connect } from 'react-redux';
import { ConnectedEventList } from './EventList';

export const Dashboard = ({ teams }) => (
    <div>
        <h2>Dashboard</h2>
        {
            teams.map(team => (
                <ConnectedEventList id={team.id} name={team.name} />
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
