import React from "react";

class MyListCounterThing extends React.Component {

  constructor(props) {
    super();
    this.state = {prop1: props.prop1, items: []};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(function(prevState) {
      let newItems = [...prevState.items];
      newItems.push(Math.random() * 100);
      return {items: newItems};
    });
  }

  render() {
    let listItems = [];
    if (this.state.items.length > 0) {
      for (let i = 0; i < this.state.items.length; i++) {
        let item = <div>{this.state.items[i]}</div>;
        listItems.push(item);
      }
    } else {
      listItems.push(<div>No columns!</div>);
    }

    return (
      <div onClick={this.handleClick}>
        { listItems }
      </div>
    );
  }

}

export default MyListCounterThing;
