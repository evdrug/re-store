import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator";

class ErrorBoundry extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.state(() => ({
            hasError: true,
        }))
    }

    render() {
            if (this.state.hasError) {
               return  <ErrorIndicator />;
            }
            return this.props.children;
    }
}

export default ErrorBoundry;