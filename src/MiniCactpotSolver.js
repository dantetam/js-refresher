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
      grid: Array(this.props.rows).fill(0).map(x => Array(this.props.cols).fill(null)),
      remainingNums: nums
    };
  }

  render() {
    return (<div>

      </div>);
  }

  componentDidMount() {

  }

}

export default MiniCactpotSolver;
