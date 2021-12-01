import { SET_CALCULATOR_DATA } from '../actionConstants';

const INITIAL_STATE = {
    operators: [
        { name: "Add", operator: '+' },
        { name: "Subtract", operator: '-' },
        { name: "Multiply", operator: '*' },
        { name: "Divide", operator: '/' }
    ],
    result: '',
    inputOne: '',
    operator: '',
    inputTwo: ''
};

const calcReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case SET_CALCULATOR_DATA:
            return {
                ...state,
                ...action.content,
            };
        default:
            return state;
    }
};

export default calcReducer;