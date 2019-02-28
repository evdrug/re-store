import React from 'react';
import { APIServicesConsumer } from '../api-services-context';

const withAPIServices = () => (Wrapped) => {
    return (props) => {
        return (
            <APIServicesConsumer>
                {
                    (apiService) => {
                        return (<Wrapped {...props} apiService={apiService} />)
                    }
                }
            </APIServicesConsumer>
        )
    }
};

export default withAPIServices;