import React from 'react';
import "./calculator.css";
import { connect } from "react-redux";
import { updateTheCalValue } from "../../redux/actions/calculator";
import Result from "./result";
import { Link } from 'react-router-dom';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    updatePropsValue = (key, e) => {
        this.props.updateTheCalValue({ [key]: e ? e.target.value : '' });
    }

    calculate = () => {
        const { inputOne, operator, inputTwo } = this.props.calData;
        switch (operator) {
            case "+":
                this.props.updateTheCalValue({ result: Number(inputOne) + Number(inputTwo) });
                break;
            case "-":
                this.props.updateTheCalValue({ result: Number(inputOne) - Number(inputTwo) });
                break;
            case "*":
                this.props.updateTheCalValue({ result: Number(inputOne) * Number(inputTwo) });
                break;
            case "/":
                this.props.updateTheCalValue({ result: Number(inputOne) / Number(inputTwo) });
                break;
            default:
                break
        }
    }

    render() {
        const operatorEle = this.props.calData.operators.map(x => {
            return (
                <option value={x.operator} key={x.operator}>{x.name}</option>
            )
        });
        const { inputOne, operator, inputTwo } = this.props.calData;
        return (
            <div align="center" className="container">
                <h1>Its a index file of Class component</h1>
                <Link to="/functionalCalculator">Functional Calculator Component</Link>
                <div align="center" className="child">
                    <h4><b>CALCULATOR</b></h4>
                    <div className="form-field">
                        <input type="number" name="inputNum" min="0" max="9999" placeholder="Enter a Number1" value={inputOne} onChange={(e) => this.updatePropsValue('inputOne', e)} />
                    </div>
                    <div className="form-field">
                        <select name="selCourse" onChange={(e) => this.updatePropsValue('operator', e)} value={operator}>
                            <option value="" disabled>Select Operation</option>
                            {operatorEle}
                        </select>
                    </div>
                    <div className="form-field">
                        <input type="number" name="outputNum" min="0" max="9999" placeholder="Enter a Number2" value={inputTwo} onChange={(e) => this.updatePropsValue('inputTwo', e)} />
                    </div>
                    <div className="form-button">
                        <button onClick={() => this.calculate()} disabled={!inputOne || !operator || !inputTwo ? true : false}>Calculate</button>
                    </div>
                    <div className="form-result">
                        <Result />
                    </div>
                </div>
            </div>
        );
    }
}

const actionCreators = {
    updateTheCalValue,
};

const mapStateToProps = (storeData) => {
    return {
        calData: storeData.calculatorData,
    };
}

export default connect(mapStateToProps, actionCreators)(Calculator);