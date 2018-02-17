import React from 'react';
import WidgetGroupStyles from './widget-group.scss';

export default class WidgetGroup extends React.Component {
    render() {
        const {
            children,
        } = this.props;

        return (
            <div className={WidgetGroupStyles.widgetGroup}>
                {children}
            </div>
        );
    }
}
