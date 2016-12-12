import {
    SET_SOURCE,
    SHOW_PHOTO_ERROR
} from '../actions/photoAction';

const initialState = {
    source: null,
    valid: false,
    showError: false
};

export default function photoReducer(state = initialState, action = {}) {
    const {payload} = action;
    switch (action.type) {
        case SET_SOURCE:
            return {
                ...state,
                source: payload,
                valid: payload !== null
            };
        case SHOW_PHOTO_ERROR:
            return {
                ...state,
                showError: payload
            };
        default:
            return state;
    }
}