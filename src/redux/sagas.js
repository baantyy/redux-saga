import { put, takeLatest, delay, takeEvery, take, call, select, all, fork } from 'redux-saga/effects';
import { loadImages, setImages, setError, loadStats, setStats, setStatsError } from './actions';
import { LOAD_FAIL, LOAD_SUCCESS, LOAD_IMAGES } from './constants';
import { fetchImages, fetchStats } from './api';

// watcher saga -> actions -> worker saga

// images
const getPage = state => state.image.page;
function* handlImagesLoad(){
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (err) {
        yield put(setError(err.toString()));
    }
};

function* imagesSaga(){
    yield takeEvery(LOAD_IMAGES, handlImagesLoad);
};

function* handleStatsLoad(id){
    for(let i = 0; i < 3; i++){
        try {
            yield put(loadStats(id));
            const res = yield call(fetchStats, id);
            yield put(setStats(res));
            return true;
        } catch (err) { }
    }
    yield put(setStatsError(id));
};

function* statsSaga(){
    while(true){
        const { payload } = yield take(LOAD_SUCCESS);
        for(let i = 0; i < payload.length; i++){
            yield fork(handleStatsLoad, payload[i].id);
        }
    }
}

export default function* rootSaga(){
    yield all([
        imagesSaga(),
        statsSaga(),
    ]);
};