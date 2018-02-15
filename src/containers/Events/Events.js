import React from 'react';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx';
import Event from '../../component/Event/Event';

@observer
export default class Events extends React.Component {
    @observable loading = false;
    @observable events = [];

    componentWillMount() {
        this.update();
    }

    update() {
        this.fetchEvents().then(this.setEvents.bind(this));
    }

    async fetchEvents() {
        return this.props.organization.events.fetch().then((events) => {
            setTimeout(this.update.bind(this), 30000);

            return events;
        });
    }

    @action
    setEvents(events) {
        this.events = events;
        this.loading = false
    }

    render() {
        if (this.loading) {
            return <h1>Loading Events ...</h1>;
        }

        return (
            <ul>
                {this.events.items && this.events.items.map((event) => {
                    return (
                        <Event event={event}/>
                    );
                })}
            </ul>
        );
    }
}
