import react from 'react';

const ChildCalculator = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={() => this.props.calculateChild}>click to update parent state value from childComponent</button>
        </div>
    )
}
export default ChildCalculator; 
