import React from 'react';
import Widget from './Widget';
import ImageWidgetStyles from './image-widget.scss';

export default class ImageWidget extends React.Component {
    render() {
        const {
            title,
            loading,
            colspan,
            rowspan,
            image,
        } = this.props;

        return (
            <Widget loading={loading} title={title} colspan={colspan} rowpan={rowspan}>
                <img src={image} className={ImageWidgetStyles.image}/>
            </Widget>
        );
    }
}
