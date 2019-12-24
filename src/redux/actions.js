import { 
    LOAD_FAIL, LOAD_IMAGES, LOAD_SUCCESS, LOAD_STATS, LOAD_STATS_SUCCESS, LOAD_STATS_FAIL 
} from "./constants";

export const loadImages = () => {
    return { 
        type: LOAD_IMAGES
    };
};

export const setImages = payload => {
    return { 
        type: LOAD_SUCCESS, 
        payload
    };
};

export const setError = payload => {
    return { 
        type: LOAD_FAIL, 
        payload
    };
};

export const loadStats = payload => {
    return { 
        type: LOAD_STATS,
        payload
    };
};

export const setStats = payload => {
    return { 
        type: LOAD_STATS_SUCCESS, 
        payload
    };
};

export const setStatsError = payload => {
    return { 
        type: LOAD_STATS_FAIL, 
        payload
    };
};
