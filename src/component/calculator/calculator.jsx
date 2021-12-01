import React from 'react';
import "./calculator.css";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: '', operators: [{ name: "Add", operator: '+' }, { name: "Subtract", operator: '-' }, { name: "Multiply", operator: '*' }, { name: "Divide", operator: '/' }], inputOne: '', operator: '', inputTwo: ''};
    }

    updateStateValue = (key, e) => {
        this.setState({ [key]: e ? e.target.value : '' })
    }

    calculate = () => {
        console.log('this.state', this.state);
        let that = this;
        switch (this.state.operator) {
            case "+":
                this.setState({ result: Number(this.state.inputOne) + Number(this.state.inputTwo) });
                break;
            case "-":
                this.setState({ result: Number(this.state.inputOne) - Number(this.state.inputTwo) }, () => {
                    console.log('State values', that.state)
                });
                break;
            case "*":
                this.setState({ result: Number(this.state.inputOne) * Number(this.state.inputTwo) });
                break;
            case "/":
                this.setState({ result: Number(this.state.inputOne) / Number(this.state.inputTwo) });
                break;
            default:
                break
        }
    }

    render() {
        const operatorEle = this.state.operators.map(x => {
            return (
                <option value={x.operator} key={x.operator}>{x.name}</option>
            )
        });
        const { inputOne, operator, inputTwo, result } = this.state;
        return (
            <div align="center" className="container">
                <div align="center" className="child">
                    <h4><b>CALCULATOR</b></h4>
                    <div className="form-field">
                        <input type="number" name="inputNum" min="0" max="9999" placeholder="Enter a Number1" value={inputOne} onChange={(e) => this.updateStateValue('inputOne', e)} />
                    </div>
                    <div className="form-field">
                        <select name="selCourse" onChange={(e) => this.updateStateValue('operator', e)} value={operator}>
                            <option value="" disabled>Select Operation</option>
                            {operatorEle}
                        </select>
                    </div>
                    <div className="form-field">
                        <input type="number" name="outputNum" min="0" max="9999" placeholder="Enter a Number2" value={inputTwo} onChange={(e) => this.updateStateValue('inputTwo', e)} />
                    </div>
                    <div className="form-button">
                        <button onClick={() => this.calculate()} disabled={(!inputOne || !operator || !inputTwo) ? true : false}>Calculate</button>
                    </div>
                    <div className="form-result">
                        <h1>Result: {result}</h1>
                    </div>

                </div>
            </div>
        );
    }
}

export default Calculator;