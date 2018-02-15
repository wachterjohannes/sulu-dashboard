import React from 'react';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx';
import Octokat from 'octokat';
import Events from '../Events/Events';

const octo = Octokat();

@observer
export default class App extends React.Component {
    @observable organization;

    componentWillMount() {
        this.fetchOrganization().then(this.setOrganization.bind(this));
    }

    async fetchOrganization() {
        return await octo.orgs('sulu').fetch();
    }

    @action
    setOrganization(organization) {
        this.organization = organization;
    }

    render() {
        if (!this.organization) {
            return <h1>Loading Organization ...</h1>;
        }

        return (
            <div>
                <h1>{this.organization.name}: Content-Management made Awesome</h1>
                <p>Wir betreuen {this.organization.publicRepos} Repositories!</p>

                <img src={this.organization.avatarUrl}/>

                <Events organization={this.organization}/>
            </div>
        );
    }
}
