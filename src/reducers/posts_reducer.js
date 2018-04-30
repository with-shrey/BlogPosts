import { FETCH_POST, FETCH_POSTS } from "../actions/types";

const INITIAL_STATE = { all:[] , post: null};

export default (state = INITIAL_STATE,action) => {
    switch (action.type){
        case FETCH_POSTS:
            return { ...state, all:action.payload.data};
        case FETCH_POST:
            return { ...state, post:action.payload.data};
        default:
            return state;
    }
}