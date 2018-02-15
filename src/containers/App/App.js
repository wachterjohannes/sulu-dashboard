import React from 'react';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx';
import Octokat from 'octokat';
import Events from '../Events/Events';

const TOKEN = process.env.TOKEN || null;
const octo = Octokat({token: TOKEN});

@observer
export default class App extends React.Component {
    @observable organization;
    @observable openIssues = 0;
    @observable stargazers = 0;
    @observable watchers = 0;
    @observable forks = 0;

    componentWillMount() {
        this.fetchOrganization().then(this.setOrganization.bind(this));
    }

    async fetchOrganization() {
        return await octo.orgs('sulu').fetch();
    }

    async fetchRepos() {
        this.organization.repos.fetch().then((repos) => {
            for (var i = 0; i < repos.items.length; i++) {
                this.setOpenIssues(this.openIssues + repos.items[i].openIssuesCount);
                this.setStargazers(this.stargazers + repos.items[i].stargazersCount);
                this.setWatchers(this.watchers + repos.items[i].watchersCount);
                this.setForks(this.forks + repos.items[i].forksCount);
            }
        });
    }

    @action
    setOrganization(organization) {
        this.organization = organization;

        this.fetchRepos();
    }

    @action
    setOpenIssues(openIssues) {
        this.openIssues = openIssues;
    }

    @action
    setStargazers(stargazers) {
        this.stargazers = stargazers;
    }

    @action
    setWatchers(watchers) {
        this.watchers = watchers;
    }

    @action
    setForks(forks) {
        this.forks = forks;
    }

    render() {
        if (!this.organization) {
            return <h1>Loading Organization ...</h1>;
        }

        return (
            <div>
                <h1>{this.organization.name}</h1>
                <h2>{this.organization.description}</h2>

                <ul>
                    <li>Wir betreuen {this.organization.publicRepos} Repositories</li>
                    <li>Unsere Repositories haben {this.openIssues} offene Issues</li>
                    <li>Insgesamt haben wir {this.stargazers} Sterne</li>
                    <li>{this.watchers} beobachten unsere Repositories</li>
                </ul>

                <img src={this.organization.avatarUrl}/>

                <Events organization={this.organization}/>
            </div>
        );
    }
}
