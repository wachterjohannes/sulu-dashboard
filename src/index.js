import 'babel-core/register';
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import DevTools from 'mobx-react-devtools';
import App from './containers/App';

render(
    <div>
        {process.env.NODE_ENV !== 'production' && <DevTools/>}
        <App/>
    </div>,
    document.getElementById('root')
);
