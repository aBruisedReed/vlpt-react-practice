import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: true
  };

  componentDidCatch(error, info) {
    console.log('error occur');
    console.log(error, info);
    this.setState({ error: true });
  }

  render() {
    if(this.state.error) {
      return <h1>ERROR OCCUR</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
