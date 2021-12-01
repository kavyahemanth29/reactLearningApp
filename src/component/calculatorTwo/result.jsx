import React from 'react';
import "./calculator.css";
import { connect } from "react-redux";

class Result extends React.Component {
    render() {
        return (
            <h1>Result from child comp: {this.props.calData.result}</h1>
        )
    }
}

const mapStateToProps = (storeData) => {
  return {
    calData: storeData.calculatorData,
  };
}

export default connect(mapStateToProps, {})(Result);