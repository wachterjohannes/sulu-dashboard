import React from 'react';
import DashboardStyles  from './dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className={DashboardStyles.dashboard}>
                {this.props.children}
            </div>
        );
    }
}
