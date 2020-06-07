import axios from 'axios';
import _ from 'lodash';

export const FETCH_COURSE_ID = 'FETCH_COURSE_REQ';
export const FETCH_COURSE_REQ = 'FETCH_COURSE_REQ';
export const POST_COURSE_REQ = 'POST_COURSE_REQ';
export const ADD_COURSE_REQ = 'ADD_COURSE_REQ';
export const DELETE_COURSE_REQ = 'DELETE_COURSE_REQ';
export const EDIT_COURSE_REQ = 'EDIT_COURSE_REQ';


export const FETCH_DEPARTMENT_REQ = 'FETCH_DEPARTMENT_REQ';
export const FETCH_DEPARTMENT_SUCESS = 'FETCH_DEPARTMENT_SUCESS';

export const FETCH_DEPARTMENT_ID = 'FETCH_DEPARTMENT_REQ';
export const ADD_DEPARTMENT_REQ = 'ADD_DEPARTMENT_REQ';
export const POST_DEPARTMENT_REQ = 'POST_DEPARTMENT_REQ';
export const EDIT_DEPARTMENT_REQ = 'EDIT_DEPARTMENT_REQ';
export const DELETE_DEPARTMENT_REQ = 'DELETE_DEPARTMENT_REQ';

export const FETCH_UAS_REQ = 'FETCH_UAS_REQ';
export const FETCH_UAS_ID = 'FETCH_UAS_REQ';
export const ADD_UAS_REQ = 'ADD_UAS_REQ';
export const POST_UAS_REQ = 'POST_UAS_REQ';
export const EDIT_UAS_REQ = 'EDIT_UAS_REQ';
export const DELETE_UAS_REQ = 'DELETE_UAS_REQ';

export const SEARCH_REQ = 'SEARCH_REQ';
export const SEARCH_REQ2 = 'SEARCH_REQ2';


/*
function fetchSucess(depts) {
	return {
		type: 'FETCH_DEPARTMENT_SUCESS',
		payload: response.data
	};
}
*/

export const fetchAllDepartments = () => {
	return function (dispatch) {
		axios.get(`/api/department/`).then((response) => {

			dispatch({
				type: 'FETCH_DEPARTMENT_SUCESS',
				payload: response.data
			})
		})
	}
}

export const search = (text) => {
	console.log(text)
	return function (dispatch) {
		axios.get(`/api/department/search/${text}`).then((response) => {
			dispatch({
				type: SEARCH_REQ,
				payload: response.data
			})
		})
	}
}
export const search2 = (text2) => {
	return function (dispatch) {
		axios.get(`/api/department/search/${text2}`).then((response) => {
			console.log(response.data)
			dispatch({
				type: SEARCH_REQ2,
				payload: response.data
			})
		})
	}
}



export const deleteDepartmentId = (departmentId) => {
	return function (dispatch) {
		axios.delete(`/api/department/delete/${departmentId}`).then((response) => {
			dispatch({
				type: DELETE_DEPARTMENT_REQ,
				payload: response.data,
			});
		});
	}
}


export const fetchCourseId = (id) => {
	console.log(id)
	return function (dispatch) {
		axios.get(`/api/department/${id}`).then((response) => {
			dispatch({
				type: FETCH_COURSE_ID,
				payload: response.data
			})
		})
	}
}



