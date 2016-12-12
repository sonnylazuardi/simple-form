export const SET_SOURCE = 'SET_SOURCE';
export const SHOW_PHOTO_ERROR = 'SHOW_PHOTO_ERROR';


export function setSource(source) {
    return {
        type: SET_SOURCE,
        payload: source
    }
}

export function showPhotoError(show) {
    return {
        type: SHOW_PHOTO_ERROR,
        payload: show
    }
}
