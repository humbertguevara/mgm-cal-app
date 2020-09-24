import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
    <div>
        <Link to="/dashboard">
            <h4>Dashboard</h4>
        </Link>
    </div>
);

export const ConnectedNavigation = connect(state => state)(Navigation);
