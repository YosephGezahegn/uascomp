import {
	FETCH_DEPARTMENT_ID,
	FETCH_DEPARTMENT_REQ,
	POST_DEPARTMENT_REQ,
	ADD_DEPARTMENT_REQ,
	DELETE_DEPARTMENT_REQ,
	EDIT_DEPARTMENT_REQ,
} from '../actions/index';

export const initialstate = {
	deptsList: [],
};

export default function(state = initialstate, action) {
	switch (action.type) {
		case FETCH_DEPARTMENT_REQ:
			return {
				...state,
				deptsList: action.payload,
			};

		case null:
			return state;

		default:
			return state;
	}
}
