import { LOAD_STATS, LOAD_STATS_FAIL, LOAD_STATS_SUCCESS } from "./constants";

const initialState = {};

const statReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOAD_STATS: 
            return {
                ...state,
                [payload]: {
                    isLoading: true,
                    downloads: null,
                    error: false,
                }
            };
        case LOAD_STATS_SUCCESS:
            return {
                ...state,
                [payload.id]: {
                    isLoading: false,
                    downloads: payload.downloads.total,
                    error: false,
                }
            };
        case LOAD_STATS_FAIL:
            return {
                ...state,
                [payload]: {
                    isLoading: false,
                    downloads: null,
                    error: true
                }
            };
        default: 
            return state;
    };
};

export default statReducer;