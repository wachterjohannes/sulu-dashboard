import React from 'react';
import {observer} from 'mobx-react';
import Events from '../../component/Events';
import {githubStore} from '../../stores';
import Dashboard from '../../component/Dashboard/Dashboard';
import Widget from '../../component/Dashboard/Widget';
import Loading from '../../component/Dashboard/Loading';
import AppStyles from './app.scss';

@observer
export default class App extends React.Component {
    render() {
        const organization = githubStore.organization || {};

        return (
            <div className={AppStyles.container}>
                <h1 className={AppStyles.header}>{organization.name} <span>{organization.description}</span></h1>

                <Dashboard>
                    <Widget colspan={1}>
                        <img src={organization.avatarUrl} width="100%"/>
                    </Widget>

                    <Widget title="Open Issues" colspan={1}>
                        {githubStore.openIssues}
                    </Widget>

                    <Widget title="Stars" colspan={1}>
                        {githubStore.stargazers}
                    </Widget>

                    <Widget title="Watchers" colspan={1}>
                        {githubStore.watchers}
                    </Widget>

                    <Widget title="Events" colspan={2} rowspan={2}>
                        {!githubStore.events && <Loading/>}
                        {githubStore.events && <Events events={githubStore.events}/>}
                    </Widget>
                </Dashboard>
            </div>
        );
    }
}
