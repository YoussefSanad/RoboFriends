import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super();
        this.state = {
            hasError: 0
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        return this.state.hasError ? <h1>Ooops. That is not good.</h1> : this.props.children
    }
}

export default ErrorBoundary;