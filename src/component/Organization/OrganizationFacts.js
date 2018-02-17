import React from 'react';

export default class OrganizationFacts extends React.Component {
    render() {
        const {
            organization,
            openIssues,
            stargazers,
            watchers,
        } = this.props;

        return (
            <div>
                <img src={organization.avatarUrl} width="50px"/>

                <ul>
                    <li>Wir betreuen {organization.publicRepos} Repositories</li>
                    <li>Unsere Repositories haben {openIssues} offene Issues</li>
                    <li>Insgesamt haben wir {stargazers} Sterne</li>
                    <li>{watchers} beobachten unsere Repositories</li>
                </ul>
            </div>
        );
    }
}
