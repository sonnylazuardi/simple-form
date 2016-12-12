export const SET_INFO = 'SET_INFO';
export const SET_ERROR = 'SET_ERROR';
export const SHOW_CONTACT_ERROR = 'SHOW_CONTACT_ERROR';

export function setInfo(field, value) {
    return {
        type: SET_INFO,
        payload: {
            field,
            value
        }
    }
}

export function validate() {
    return (dispatch, getState) => {
        let errors = {};
        let valid = true;
        const state = getState().contact;
        if (state.firstName == '') {
            errors['firstName'] = 'This field cannot be empty';
            valid = false;
        }
        if (state.lastName == '') {
            errors['lastName'] = 'This field cannot be empty';
            valid = false;
        }
        if (state.contactNumber == '') {
            errors['contactNumber'] = 'This field cannot be empty';
            valid = false;
        }
        if (state.address == '') {
            errors['address'] = 'This field cannot be empty';
            valid = false;
        }
        if (!state.contactNumber.match(/^[+0-9()-\s]+$/)) {
            errors['contactNumber'] = 'This field should contain only numbers';
            valid = false;
        }
        dispatch(setError(errors, valid));
        return Promise.resolve({
            errors,
            valid
        });
    };  
}

export function setError(errors, valid) {
    return {
        type: SET_ERROR,
        payload: {
            errors,
            valid
        }
    }
}

export function showContactError(show) {
    return {
        type: SHOW_CONTACT_ERROR,
        payload: show
    }
}