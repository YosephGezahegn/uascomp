import {
	FETCH_DEPARTMENT_ID,
	FETCH_DEPARTMENT_REQ,
	POST_DEPARTMENT_REQ,
	ADD_DEPARTMENT_REQ,
	DELETE_DEPARTMENT_REQ,
	EDIT_DEPARTMENT_REQ,
	FETCH_DEPARTMENT_SUCESS,
	SEARCH_REQ
} from '../actions/index';

export const initialstate = {
	deptsList: [],
	deptId: []
};

export default function (state = initialstate, action) {
	switch (action.type) {
		case FETCH_DEPARTMENT_SUCESS:
			return {
				...state,
				deptsList: action.payload,
			};
		case FETCH_DEPARTMENT_ID:
			return {
				...state,
				deptId: action.payload,
			};
		case DELETE_DEPARTMENT_REQ:
			return {
				...state,
			};

		case null:
			return state;

		default:
			return state;
	}
}


