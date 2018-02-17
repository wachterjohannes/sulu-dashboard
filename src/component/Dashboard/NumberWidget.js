import React from 'react';
import Widget from './Widget';
import NumberWidgetStyles from './number-widget.scss';

export default class NumberWidget extends React.Component {
    render() {
        const {
            title,
            loading,
            colspan,
            rowspan,
            value,
        } = this.props;

        return (
            <Widget loading={loading} title={title} colspan={colspan} rowpan={rowspan}>
                <span className={NumberWidgetStyles.value}>{value}</span>
            </Widget>
        );
    }
}
