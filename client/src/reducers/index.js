import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import deptReducer from './deptReducer';
import uasReducer from './uasReducer';
import searchReducer from './searchReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	courseReducer: courseReducer,
	deptReducer: deptReducer,
	uasReducer: uasReducer,
	searchReducer: searchReducer,
	formReducer: formReducer,
});

export default rootReducer;
