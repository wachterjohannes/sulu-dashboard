import React from 'react';
import ActorStyles from './actor.scss';

export default class Actor extends React.Component {
    render() {
        const {
            actor,
        } = this.props;

        return (
            <div className={ActorStyles.container}>
                <img src={actor.avatarUrl} className={ActorStyles.image}/>
                <h3 className={ActorStyles.login}>{actor.displayLogin}</h3>
            </div>
        );
    }
}
