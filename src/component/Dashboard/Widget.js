import React from 'react';
import classNames from 'classnames';
import WidgetStyles from './widget.scss';

export default class Widget extends React.Component {
    constructor(props) {
        super(props);

        // Create inline styles to make grid elements span multiple rows/columns
        this.spanStyles = {};
        if (props.colspan !== 1) {
            this.spanStyles.gridColumn = `span ${props.colspan || 1}`;
        }
        if (props.rowspan !== 1) {
            this.spanStyles.gridRow = `span ${props.rowspan || 1}`;
        }
    }

    render() {
        const {
            title,
            loading,
            children,
        } = this.props;
        const className = classNames(WidgetStyles.widget);

        return (
            <div style={this.spanStyles} className={className}>
                <div className={WidgetStyles.header}>
                    <h2 className={WidgetStyles.title}>{title}</h2>
                </div>
                {loading && <span>Loading ...</span>}

                <div className={WidgetStyles.content}>
                    {children}
                </div>
            </div>
        );
    }
}
