import React from 'react';
import { connect } from 'react-redux';
import { ConnectedEventList } from './EventList';
import { ConnectedNavigation } from './Navigation'

export const Dashboard = ({ teams }) => (
    <div className="row">
        <ConnectedNavigation />
        {teams.map(team => (
            <ConnectedEventList key={team.id} id={team.id} name={team.name}
                className="col"/>
        ))}
    </div>
);

function mapStateToProps(state) {
    return {
        teams: state.teams
    };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
