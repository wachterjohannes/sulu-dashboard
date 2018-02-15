import React from 'react';
import Moment from 'react-moment';

export default class Event extends React.Component {
    render() {
        const {event} = this.props;

        return (
            <li>
                {event.actor.displayLogin} hat am <Moment interval={10000} fromNow locale="de">{event.createdAt}</Moment> ein {event.type} durchgeführt
            </li>
        );
    }
}
