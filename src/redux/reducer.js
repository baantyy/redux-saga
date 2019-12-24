import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import statReducer from './statReducer';

const reducer = combineReducers({
    image: imageReducer,
    stat: statReducer,
});

export default reducer;