import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import APIServices from './services/APIServices';
import { APIServicesProvider } from "./components/api-services-context";
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab);

const apiServices = new APIServices();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <APIServicesProvider value={apiServices}>
                <Router>
                    <App/>
                </Router>
            </APIServicesProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);