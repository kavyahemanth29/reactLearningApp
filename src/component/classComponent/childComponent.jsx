import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childDate: new Date()
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    // this.props.handleClick();
  }

  handleClickFromChild() {
    // this.props.handleClick(new Date()); // To update parent's state value and its props value
    this.setState({childDate: new Date()}); // To update current state value
  }

  render() {
    return (
      <div>
        <div><button onClick={() => this.props.handleClick(new Date())}>Click to update parent state value from child</button></div>
        <div><button onClick={() => this.handleClickFromChild()}>Update Child's State Value</button></div>
        <h1>Child Component State Date value {this.state.childDate.toString()}</h1>
        <h1>Child Component Props Date value {this.props.date.toString()}</h1>
      </div>
    );
  }
}

export default ChildComponent;