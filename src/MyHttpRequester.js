import React from "react";
import axios, * as others from 'axios';


class MyHttpRequester extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: "No response, click me"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const component = this;
    axios
      .get("http://httpbin.org/get?kablah=2")
      .then(function(res) {
        component.setState(prevState => (
          {
            response: res
          }
        ));
      });
  }

  render() {
    return (
      <div onClick={this.handleClick}>{JSON.stringify(this.state.response)}</div>
    );
  }

}

export default MyHttpRequester;
