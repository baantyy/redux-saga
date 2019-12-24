import { LOAD_FAIL, LOAD_IMAGES, LOAD_SUCCESS } from "./constants";

const initialState = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
};

const imageReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOAD_IMAGES: 
            return { ...state, ...{ isLoading: true }};
        case LOAD_SUCCESS: 
            const page = state.page + 1;
            const images = [...state.images, ...payload];
            return { ...state, ...{ images, isLoading: false, error: null, page }};
        case LOAD_FAIL: 
            return { ...state, ...{ isLoading: false, error: payload }};
        default: 
            return state;
    };
};

export default imageReducer;