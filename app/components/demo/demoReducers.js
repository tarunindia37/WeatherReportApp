import { DEMO_LOAD } from './demoActions';

// Default state.
let dataState = { data: ''};

const demoReducer = (state = dataState, action) => {

    switch (action.type) {
    case DEMO_LOAD:
        state = Object.assign({}, state, { data: action.data });
        return state;

    default:
        return state;
    }
};

export default demoReducer;
