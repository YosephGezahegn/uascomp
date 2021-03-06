import {
    FETCH_UAS_ID,
    FETCH_UAS_REQ,
    POST_UAS_REQ,
    ADD_UAS_REQ,
    DELETE_UAS_REQ,
    EDIT_UAS_REQ,
} from '../actions/index';

export const initialstate = {
    uassList: [],
};

export default function (state = initialstate, action) {
    switch (action.type) {
        case FETCH_UAS_REQ:
            return {
                ...state,
                uassList: action.payload,
            };

        case null:
            return state;

        default:
            return state;
    }
}


