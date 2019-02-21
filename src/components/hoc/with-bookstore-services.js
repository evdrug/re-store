import React from 'react';
import { BookstoreServicesConsumer } from '../bookstore-services-context';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServicesConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} bookstoreService={bookstoreService} />)
                    }
                }
            </BookstoreServicesConsumer>
        )
    }
};

export default withBookstoreService;