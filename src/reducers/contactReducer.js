import {
    SET_INFO,
    SET_ERROR,
    SHOW_CONTACT_ERROR
} from '../actions/contactAction';

const initialState = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    valid: false,
    errors: {},
    showError: false
};

export default function contactReducer(state = initialState, action = {}) {
    const {payload} = action;
    switch (action.type) {
        case SET_INFO:
            return {
                ...state,
                [payload.field]: payload.value
            };
        case SHOW_CONTACT_ERROR:
            return {
                ...state,
                showError: payload
            };
        case SET_ERROR:
            return {
                ...state,
                errors: payload.errors,
                valid: payload.valid
            };
        default:
            return state;
    }
}