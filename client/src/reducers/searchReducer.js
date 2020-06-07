import {
    SEARCH_REQ,
    SEARCH_REQ2
} from '../actions/index';

export const initialstate = {
    searchResult: [],
    searchResult2: [],
};

export default function (state = initialstate, action) {
    switch (action.type) {
        case SEARCH_REQ:
            return {
                ...state,
                searchResult: action.payload,
            };
        case SEARCH_REQ2:
            return {
                ...state,
                searchResult2: action.payload,
            };
        case null:
            return state;

        default:
            return state;
    }
}