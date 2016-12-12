export const ACTIVATE_PAGE = 'ACTIVATE_PAGE';
export const SET_INDEX = 'SET_INDEX';
export const SET_PAGE = 'SET_PAGE';

export function activatePage(page) {
    return {
        type: ACTIVATE_PAGE,
        payload: page
    }
}

export function setIndex(index) {
    return {
        type: SET_INDEX,
        payload: index
    }
}

export function setPage(page) {
    return {
        type: SET_PAGE,
        payload: page
    }
}
