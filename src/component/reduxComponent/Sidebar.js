import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCounter } from "../../redux/actions/counterActions";
import { setname } from "../../redux/actions/textActions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.nameText.name
    };
  }


  // handleInput = event => {
  //   // this.setState({ name: event.target.value });
  //   this.props.setname(event.target.value);
  // };

  render() {
    const { name } = this.state;

    const { resetCounter, counterObj } = this.props;

    return (
      <div className="side">

        <h2>{counterObj.counterTitle}: {counterObj.count}</h2>
        <input type="button" className="btn" value="Reset Counter" onClick={resetCounter} />
        {/* <input type="text" value={this.props.nameText.name} onChange={this.handleInput} /> */}
        <input type="text"  value={name} onChange={e => this.setState({ name: e.target.value })} />
        <input type="button"  value="Set" onClick={() => this.props.setname(name)} />

        <h2>Arcu bibendum</h2>
        <h5>Sit amet mattis vulputate</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Non blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla..</p>
        <h3>Massa enim</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
        <div className="fakeimg" style={{ height: 60 }}>Image</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterObj: state.counter,
    nameText: state.nameText
  }
}

const mapDispatchToProps = {
  resetCounter,
  setname
}




export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);