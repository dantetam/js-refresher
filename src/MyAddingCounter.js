import React from "react";

class MyAddingCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: this.props.title
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => (
      {
        count: prevState.count + 10,
        title: prevState.title
      }
    ))
  }

  render() {
    return (
      <div onClick={this.handleClick}>Title: {this.state.title}, Count: {this.state.count}</div>
    );
  }

}

export default MyAddingCounter;
