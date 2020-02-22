import {
	FETCH_COURSE_ID,
	FETCH_COURSE_REQ,
	POST_COURSE_REQ,
	ADD_COURSE_REQ,
	DELETE_COURSE_REQ,
	EDIT_COURSE_REQ,
} from '../actions/index';

export const initialstate = {
	coursesList: [],
};

export default function(state = initialstate, action) {
	switch (action.type) {
		case FETCH_COURSE_REQ:
			return {
				...state,
				coursesList: action.payload,
			};

		case null:
			return state;

		default:
			return state;
	}
}

/*fetchAllDepartments
fetchDepartmentId
deleteDepartmentId


fetchAllUas
fetchUasId
deleteUasId


fetchCourseId
fetchAllCourses
deleteCourseId


search*/
