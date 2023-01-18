import React from "react";

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

class MiniCactpotSolver extends React.Component {

  constructor(props) {
    super(props);

    let remainingNums = {};

    let nums = this.props.nums;
    if (nums === undefined) {
      nums = Array(this.props.rows * this.props.cols).fill(0);
      nums = nums.map((elem, index) => {
        remainingNums[index + 1] = true;
      });
    }

    this.state = {
      rows: this.props.rows,
      cols: this.props.cols,
      grid: Array(this.props.rows).fill(0).map(x => Array(this.props.cols).fill(null)),
      remainingNums: remainingNums
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (<div>
        Here: <br />

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

        let input = <input type="text" value={str} onChange={(e) => this.handleChange(e, i, j)} />

        cols.push(<td>{input}</td>);
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
      console.log("event: " + event.target.value + " " + row + " " + col);
      let newTile = event.target.value;
      if (isNumeric(newTile)) {
        newTile = Number(newTile);
        if (this.state.remainingNums[newTile]) {
          this.setState(function(prevState) {
            let newBoard = {...prevState.grid};
            newBoard[row][col] = newTile;
            prevState.remainingNums[newTile] = undefined;
            return {...prevState, grid: newBoard};
          });
        };
      }
    }
  }

  componentDidMount() {

  }

}

export default MiniCactpotSolver;
