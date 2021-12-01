import React from 'react';
import { connect } from "react-redux";
import { updateTheCalValue } from "../../redux/actions/calculator";

const InputFields = (props) => {
    const updatePropsValue = (key, e) => {
        props.updateTheCalValue({ [key]: e ? e.target.value : '' });
    }
    return (
        <div className="form-field">
            <input type="number" name="inputNum" min="0" max="9999" placeholder="Enter a Number1" value={props[props.key]} onChange={(e) => updatePropsValue(props.key, e)} />
        </div>
    )
}

const actionCreators = {
  updateTheCalValue,
};

const mapStateToProps = (storeData) => {
  return {
    calData: storeData.calculatorData,
  };
}
export default connect(mapStateToProps,actionCreators)(InputFields);