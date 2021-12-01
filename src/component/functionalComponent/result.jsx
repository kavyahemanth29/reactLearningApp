import React from 'react';
import { connect } from "react-redux";

const Result = (props) => {
    return (
        <h1>Result from child functional comp: {props.calData.result}</h1>
    )
}

const mapStateToProps = (storeData) => {
  return {
    calData: storeData.calculatorData,
  };
}
export default connect(mapStateToProps, {})(Result);