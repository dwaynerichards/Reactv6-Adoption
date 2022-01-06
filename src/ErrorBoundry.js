//reactDocs
/* eslint-disable import/namespace */
import { Component } from "react";
// eslint-disable-next-line import/named
import { Link, Redirect } from "react-router-dom";

export default class ErrorBoundry extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log("ErrorBoundry caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 1000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <div>
          <h2>
            This Listing has an error!
            <Link to="/">Click Here</Link> to go back to the home page.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}
