import Octokat from 'octokat';
import {action, observable} from 'mobx';

export default class GithubStore {
    @observable organization;
    @observable openIssues = 0;
    @observable stargazers = 0;
    @observable watchers = 0;
    @observable forks = 0;
    @observable events;

    constructor(token, organizationName) {
        this.octo = Octokat({token: token});

        this.fetchOrganization(organizationName).then(this.setOrganization.bind(this));
    }

    updateEvents() {
        this.fetchEvents().then(this.setEvents.bind(this));

        setTimeout(this.updateEvents.bind(this), 300000);
    }

    async fetchOrganization(organizationName) {
        return await this.octo.orgs(organizationName).fetch();
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

    async fetchEvents() {
        return this.organization.events.fetch();
    }

    @action
    setOrganization(organization) {
        this.organization = organization;

        this.fetchRepos();
        this.updateEvents();
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

    @action
    setEvents(events) {
        this.events = events;
    }
}
