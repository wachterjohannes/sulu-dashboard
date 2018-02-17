import React from 'react';
import {observer} from 'mobx-react';
import Events from '../../component/Events';
import {githubStore} from '../../stores';
import Dashboard, {NumberWidget, ImageWidget, Widget} from '../../component/Dashboard';
import AppStyles from './app.scss';

@observer
export default class App extends React.Component {
    render() {
        const organization = githubStore.organization || {};

        return (
            <div className={AppStyles.container}>
                <h1 className={AppStyles.header}>{organization.name} <span>{organization.description}</span></h1>

                <Dashboard>
                    <ImageWidget colspan={1} image={organization.avatarUrl}/>
                    <NumberWidget title="Repositories" colspan={1} value={organization.publicRepos}/>
                    <NumberWidget title="Open Issues" colspan={1} value={githubStore.openIssues}/>
                    <NumberWidget title="Stars" colspan={1} value={githubStore.stargazers}/>

                    <Widget title="Events" loading={!githubStore.events} colspan={2} rowspan={2}>
                        {githubStore.events && <Events events={githubStore.events}/>}
                    </Widget>
                </Dashboard>
            </div>
        );
    }
}
