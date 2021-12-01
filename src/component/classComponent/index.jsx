import React from 'react';
import ChildComponent from './childComponent';
import { connect } from "react-redux";
import { updateTheValue } from "../../redux/actions/classComponent";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      showChild: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.x = {a: 1};
  }

  componentDidMount() {
  }

  // componentDidUpdate() {
  // }

  componentWillUnmount() {
    alert('hi');
  }

  handleClick(newDate) {
    this.setState({ date: newDate });
  }

  handleClickOtherThanState() {
    this.x.a = 2;
  }

  updateStoreValue() {
    const currentValue = this.props.classDataValues.kavya;
    this.props.updateTheValue({kavya: `${currentValue}  ${Date.now()}`});
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.handleClick(new Date())}>Hello, world!</h1>
        {/* <h2>It is. {this.state.date ? this.state.date.toString() : "Date is not yet initialised"}</h2> */}
        <h2>It is. {this.state.date.toString()}</h2>

         <h1>Prosps data {this.props.classDataValues.kavya}</h1> 
        {/* <h3 onClick={() => this.setState({ showChild: !this.state.showChild })}>Toggle child</h3> */}
        {
          this.state.showChild &&
          <ChildComponent date={this.state.date} handleClick={this.handleClick}/>
        }

        {/* <h1 onClick={this.handleClickOtherThanState.bind(this)}>Parent normal const initiation and update{this.x.a}</h1> */}

        <h1>This is the redux props value {this.props.classDataValues.kavya}</h1>

        <button onClick={() => this.updateStoreValue()}>Click to change Store Value</button>
      </div>
    );
  }
}

const actionCreators = {
  updateTheValue,
};

const mapStateToProps = (storeData) => {
  return {
    classDataValues: storeData.classData,
  };
}

export default connect(mapStateToProps, actionCreators)(ClassComponent);

// export default connect(
//   ({classData}) => ({
//     classData,
//   }),
//   actionMethodNames
// )(ClassComponent);