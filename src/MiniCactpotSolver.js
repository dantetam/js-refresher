import React from "react";

class MiniCactpotSolver extends React.Component {

  constructor(props) {
    super(props);

    let nums = this.props.nums;
    if (nums === undefined) {
      nums = Array(this.props.rows * this.props.cols).fill(0);
      nums = nums.map((elem, index) => {
        return index + 1;
      });
    }

    this.state = {
      rows: this.props.rows,
      cols: this.props.cols,
      grid: Array(this.props.rows).fill(0).map(x => Array(this.props.cols).fill(null)),
      remainingNums: nums
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (<div>
        Here: <br/>
        <input type="text" onChange={(e) => this.handleChange(e, 1, 2)} />

        Board: <br />
        { this.getBoard() }
      </div>);
  }

  getBoard() {
    let rows = [];
    for (let i = 0; i < this.state.rows; i++) {
      let cols = [];
      for (let j = 0; j < this.state.cols; j++) {
        let str = this.state.grid[i][j];
        if (str === null) {
          str = "Hidden"
        }
        cols.push(<td>{str}</td>);
      }
      rows.push(<tr>{cols}</tr>);
    }

    const tableStyle = {
      border: '10px solid'
    }

    return (
      <table style={tableStyle}>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

  handleChange(event, row, col) {
    if (event.target !== undefined) {
      console.log("item: " + event.target.value);
      console.log(row);

    }
  }

  componentDidMount() {

  }

}

export default MiniCactpotSolver;
