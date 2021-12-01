import React from 'react';
import ChildComponent from './childComponent';

class ClassComponentTwo extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      bike: "Yamaha",
      model: "R15",
      color:"blue",
      
    };
    this.changeBikeColor=this.changeBikeColor.bind(this);
  }
  

  componentDidMount() {
  }

  // componentDidUpdate() {
  // }

  componentWillUnmount() {
    alert('hi');
  }

 changeBikeColor = () => {
    const p = document.getElementById("container");
    p.style.color = "black";
    this.setState({color: "black"});
    
    

  }

 
  render() {
    return (
      <div>

        <h2>My {this.state.bike}</h2>
        

        <p id="container" style={{ color: 'blue' }}>It is  {this.state.color}{this.state.model}.</p>

        <button type="button"  onClick={this.changeBikeColor}>Change color</button>
        <ChildComponent bikeName={this.state.bike} changeBikeColor={this.changeBikeColor}/>
        
      </div>
    );
  }
}
export default ClassComponentTwo;

