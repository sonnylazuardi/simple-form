import {
    SET_INDEX,
    SET_PAGE,
    SET_PAGE_ACTIVE,
} from '../actions/appAction';

const initialState = {
    index: 0,
    routes: [
        {key: '1', title: 'Step 1', active: true},
        {key: '2', title: 'Step 2', active: false},
        {key: '3', title: 'Step 3', active: false},
    ]
};

export default function appReducer(state = initialState, action = {}) {
    const {payload} = action;
    switch (action.type) {
        case SET_INDEX:
            return {
                ...state,
                index: payload,
            };
        case SET_PAGE:
            return {
                ...state,
                index: (payload - 1),
            };
        case SET_PAGE_ACTIVE:
            const {routes} = state;
            const index = routes.findIndex((route) => parseInt(route.key) == payload.page);
            if (index == -1) return state;
            return {
                ...state,
                routes: [
                    ...routes.slice(0, index),
                    {...routes[index], active: payload.active},
                    ...routes.slice(index + 1)
                ]
            };
        default:
            return state;
    }
}