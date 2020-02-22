import axios from 'axios';
import _ from 'lodash';

export const FETCH_COURSE_ID = 'FETCH_COURSE_REQ';
export const FETCH_COURSE_REQ = 'FETCH_COURSE_REQ';
export const POST_COURSE_REQ = 'POST_COURSE_REQ';
export const ADD_COURSE_REQ = 'ADD_COURSE_REQ';
export const DELETE_COURSE_REQ = 'DELETE_COURSE_REQ';
export const EDIT_COURSE_REQ = 'EDIT_COURSE_REQ';

export const FETCH_DEPARTMENT_REQ = 'FETCH_DEPARTMENT_REQ';
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

export function fetchAllDepartments() {
	const request = axios.get(`/api/department/`).then((data) => {
		return {
			type: FETCH_DEPARTMENT_REQ,
			payload: request.data,
		};
	});
}

export function fetchAllUas() {
	const request = axios.get(`/api/uas/`).then((data) => {
		return {
			type: FETCH_UAS_REQ,
			payload: request.data,
		};
	});
}
export function fetchAllCourses() {
	const request = axios.get(`/api/course/`).then((data) => {
		return {
			type: FETCH_COURSE_REQ,
			payload: request.data,
		};
	});
}
export function fetchCourseId(courseId) {
	const request = axios.get(`/api/course/${courseId}`).then((data) => {
		return {
			type: FETCH_COURSE_ID,
			payload: request.data,
		};
	});
}

export function fetchDepartmentId(departmentId) {
	const request = axios.get(`/api/department/${departmentId}`).then((data) => {
		return {
			type: FETCH_DEPARTMENT_ID,
			payload: request.data,
		};
	});
}

export function fetchUasId(uasId) {
	const request = axios.get(`/api/uas/${uasId}`).then((data) => {
		return {
			type: FETCH_UAS_ID,
			payload: request.data,
		};
	});
}
export function deleteUasId(uasId) {
	const request = axios.get(`/api/uas/${uasId}`).then((data) => {
		return {
			type: DELETE_UAS_REQ,
			payload: request.data,
		};
	});
}
export function deleteDepartmentId(departmentId) {
	const request = axios.get(`/api/department/${departmentId}`).then((data) => {
		return {
			type: DELETE_DEPARTMENT_REQ,
			payload: request.data,
		};
	});
}
export function deleteCourseId(courseId) {
	const request = axios.get(`/api/course/${courseId}`).then((data) => {
		return {
			type: DELETE_COURSE_REQ,
			payload: request.data,
		};
	});
}

export function search(searchValue) {
	const request = axios.get(`/api/course/${searchValue}`).then((data) => {
		return {
			type: SEARCH_REQ,
			payload: request.data,
		};
	});
}
