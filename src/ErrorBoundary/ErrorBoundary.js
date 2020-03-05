import React, { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  };

  render() {
    if (this.state.hasError) {
      return <div>Seomthing went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
