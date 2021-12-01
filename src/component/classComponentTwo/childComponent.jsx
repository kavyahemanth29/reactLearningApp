import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kavya'
    };
  }

  componentDidMount() {
    console.log("This function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time");
  }

  componentDidUpdate() {
    console.log("This function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.")

  }

  updateName() {
    this.props.changeBikeColor();
    this.setState({ name: "Hemanth" });
  }


  componentWillUnmount() {
    console.log("This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.");
  }

 

  render() {
    console.log('component rendered');
    return (
      <div>
        <h1>ChildComponent state name value  {this.state.name} </h1>
        <h1>Child Component Props bike value {this.props.bikeName}</h1>
        

        <button onClick={() => this.updateName()}> click to update child's state value ChildComponent </button>
        <br/>
        <button onClick={() => this.props.changeBikeColor()}>click to update parent state value from childComponent</button>
        <br/>
        <button onClick={() => this.updateName()}>updates childs state value</button>
       
      </div>
    );
  }
}
export default ChildComponent;
