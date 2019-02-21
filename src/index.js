import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreServices from './services/bookstore-services';
import { BookstoreServicesProvider } from './components/bookstore-services-context';
import store from './store';

const bookstoreServices = new BookstoreServices();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServicesProvider value={bookstoreServices}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServicesProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);