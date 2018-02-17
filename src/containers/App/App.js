import React from 'react';
import {observer} from 'mobx-react';
import Events from '../../component/Events';
import {githubStore} from '../../stores';
import Dashboard from "../../component/Dashboard/Dashboard";
import Widget from "../../component/Dashboard/Widget";
import Loading from "../../component/Dashboard/Loading";
import OrganizationFacts from "../../component/Organization/OrganizationFacts";

@observer
export default class App extends React.Component {
    render() {
        if (!githubStore.organization) {
            return <h1>Loading Organization ...</h1>;
        }

        return (
            <div>
                <h1>{githubStore.organization.name}</h1>
                <h2>{githubStore.organization.description}</h2>

                <Dashboard>
                    <Widget title="Organization">
                        <OrganizationFacts organization={githubStore.organization}
                                           openIssues={githubStore.openIssues}
                                           stargazers={githubStore.stargazers}
                                           watchers={githubStore.watchers}/>
                    </Widget>
                    <Widget title="Events">
                        {!githubStore.events && <Loading/>}
                        {githubStore.events && <Events events={githubStore.events}/>}
                    </Widget>
                </Dashboard>
            </div>
        );
    }
}
