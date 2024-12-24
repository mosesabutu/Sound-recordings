/* eslint-disable react/prop-types */
import { Component } from "react";
import WithRouter from "./tanstack/WithRouter";



class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props);
    //this checks if the current url is equal to the route of the element that threw the error
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ hasError: false })
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry, Something Went Wrong <a href="/">Go Home</a></h1>;
    }
    return this.props.children;
  }
}
export default WithRouter(ErrorBoundry);
