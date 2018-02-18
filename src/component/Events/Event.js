import React from 'react';
import Moment from 'react-moment';
import Actor from './Actor';
import IssueCommentEvent from './IssueCommentEvent';
import EventStyles from './event.scss';

const COMPONENT_MAP = {
    'IssueCommentEvent': IssueCommentEvent
};

export default class Event extends React.Component {
    render() {
        const {
            event,
        } = this.props;
        const Component = COMPONENT_MAP[event.type];

        return (
            <div>
                <Actor actor={event.actor}/>
                {Component && <Component payload={event.payload} repo={event.repo}/> || <p>{event.type}</p>}
                <div className={EventStyles.moment}>
                    <Moment interval={10000} fromNow locale="en">
                        {event.createdAt}
                    </Moment>
                </div>
            </div>
        );
    }
}
