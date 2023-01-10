import React from "react";


class MyPromiseComp extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {title: "No click registered yet"};
  }

  handleClick() {
    let component = this;

    let myPromise = new Promise(function(myResolve, myReject) {
      let x = 0;

      // The producing code (this may take some time)
      setTimeout(1500);

      if (x == 0) {
        myResolve("OK result (we need result)");
      } else {
        myReject("Error");
      }
    });
    myPromise.then(
      function(value) {
        console.log("Succeeded after time, " + value);
        component.setState({title: "We got an async result: " + value});
      },
      function(error) {console.log("Failed after time");}
    );

    this.setState({title: "We clicked the button, waiting"});
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.title}</div>
    );
  }

}

export default MyPromiseComp;
