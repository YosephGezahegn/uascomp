import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import deptReducer from './depReducer';
import uasReducer from './uasReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	courseReducer: courseReducer,
	deptReducer: deptReducer,
	uasReducer: uasReducer,
	formReducer: formReducer,
});

export default rootReducer;
