import React from 'react';
import EventStyles from './event.scss';

export default class IssueCommentEvent extends React.Component {
    render() {
        const {
            repo: {
                name,
            },
            payload: {
                comment: {
                    body,
                },
                issue: {
                    number,
                }
            }
        } = this.props;

        return (
            <React.Fragment>
                <span className={EventStyles.description}>commented on issue {name}#{number}</span>

                <p className={EventStyles.body}>{body}</p>
            </React.Fragment>
        );
    }
}
