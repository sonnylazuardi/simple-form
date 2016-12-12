export const SET_PAGE_ACTIVE = 'SET_PAGE_ACTIVE';
export const SET_INDEX = 'SET_INDEX';
export const SET_PAGE = 'SET_PAGE';

export function setPageActive(page, active) {
    return {
        type: SET_PAGE_ACTIVE,
        payload: {
            page,
            active
        }
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
