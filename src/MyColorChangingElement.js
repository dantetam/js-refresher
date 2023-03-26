import React from "react";

const colors = ['blue', 'red', 'green', 'orange', 'yellow', 'purple']

class MyColorChangingElement extends React.Component {

  handleClick(event) {
    if (this.state.colors.length > 0) {
      this.setState(function(prevState) {
        let colors = [...prevState.colors];
        let firstColor = colors[0];
        for (let i = 0; i < colors.length - 1; i++) {
          colors[i] = colors[i+1];
        }
        colors[colors.length - 1] = firstColor;
        return { colors: colors };
      });
    }
  }

  constructor(props) {
    super(props);
    let newRandColors = [];
    for (let i = 0; i < props.rows; i++) {
      let randIndex = Math.floor(Math.random() * colors.length);
      newRandColors.push(colors[randIndex]);
    }
    this.state = { colors: newRandColors }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let listRows = [];
    for (let i = 0; i < this.state.colors.length; i++) {
      let rowColor = this.state.colors[i];
      listRows.push(<div onClick={this.handleClick} style={{ "background-color": rowColor }}>{rowColor}</div>);
    }
    return (
      <div>
        <p>My Colors: V</p>
        { listRows }
      </div>
    );
  }

}

export default MyColorChangingElement;
