import React from 'react';

export default class Widget extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <div>{this.props.children}</div>
            </div>
        );
    }
}
