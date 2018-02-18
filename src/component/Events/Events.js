import React from 'react';
import Event from './Event';

export default class Events extends React.Component {
    render() {
        return (
            <div>
                {this.props.events.items && this.props.events.items.map((event) => {
                    return (
                        <Event event={event} key={event.id}/>
                    );
                })}
            </div>
        );
    }
}
