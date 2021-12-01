import { combineReducers } from 'redux';
import classData from './reducers/classComponent';
import calculatorData from './reducers/calculator';
import counter from './reducers/counterReducer';
import head from './reducers/headReducer';
import nameText from './reducers/textReducer';

const rootReducer = combineReducers({
	classData,
	calculatorData,
	counter,
    head,
	nameText
});

export default rootReducer;