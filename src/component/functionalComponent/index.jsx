import React from 'react';
import "../calculator/calculator.css";
import { connect } from "react-redux";
import { updateTheCalValue } from "../../redux/actions/calculator";
// import InputFields from './inputFields';
import Result from './result';
import { Link } from 'react-router-dom';

const FunctionalComponent = (props) => {
    const { inputOne, operator, inputTwo } = props.calData;

    const updatePropsValue = (key, e) => {
        props.updateTheCalValue({ [key]: e ? e.target.value : '' });
    }

    const calculate = () => {
        switch (operator) {
            case "+":
                props.updateTheCalValue({ result: Number(inputOne) + Number(inputTwo) });
                break;
            case "-":
                props.updateTheCalValue({ result: Number(inputOne) - Number(inputTwo) });
                break;
            case "*":
                props.updateTheCalValue({ result: Number(inputOne) * Number(inputTwo) });
                break;
            case "/":
                props.updateTheCalValue({ result: Number(inputOne) / Number(inputTwo) });
                break;
            default:
                break
        }
    }

    const operatorEle = props.calData.operators.map(x => {
        return (
            <option value={x.operator} key={x.operator}>{x.name}</option>
        )
    });

    return (
        <div align="center" className="container">
            <h1>Its a index file of functional component</h1>
            <Link to="/calculatorTwo">Class Calculator Component</Link>
            <div align="center" className="child">
                <h4><b>CALCULATOR</b></h4>
                {/* <InputFields key='inputOne' /> */}
                {/* <Operator /> */}
                {/* <InputFields key='inputTwo' /> */}
                <div className="form-field">
                    <input type="number" name="inputNum" min="0" max="9999" placeholder="Enter a Number1" value={inputOne} onChange={(e) => updatePropsValue('inputOne', e)} />
                </div>
                <div className="form-field">
                    <select name="selCourse" onChange={(e) => updatePropsValue('operator', e)} value={operator}>
                        <option value="" disabled>Select Operation</option>
                        {operatorEle}
                    </select>
                </div>
                <div className="form-field">
                    <input type="number" name="inputNum" min="0" max="9999" placeholder="Enter a Number1" value={inputTwo} onChange={(e) => updatePropsValue('inputTwo', e)} />
                </div>
                <div className="form-button">
                    <button onClick={() => calculate()} disabled={!inputOne || !operator || !inputTwo ? true : false}>Calculate</button>
                </div>
                <div className="form-result">
                    <Result />
                </div>
            </div>
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

export default connect(mapStateToProps, actionCreators)(FunctionalComponent);