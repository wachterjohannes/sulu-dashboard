import React from 'react';
import Moment from 'react-moment';

export default class Event extends React.Component {
    render() {
        const {event} = this.props;

        return (
            <li>
                {event.actor.displayLogin} <Moment interval={10000} fromNow locale="en">{event.createdAt}</Moment> {event.type}
            </li>
        );
    }
}
