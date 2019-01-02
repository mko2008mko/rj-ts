import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_MORE_LIST, getMoreListSuccess, getHomeDataSuccess, GET_HOME_DATA } from '../pages/home/store/home.redux';
import { GET_SEARCH_KEYWORD_LIST, getListSuccess } from '../components/head/store/head.redux';
import { GET_DETAIL_DATA, getDetailSuccess } from '../pages/detail/store/detail.redux';
import { GET_LOGIN, loginSuccess } from '../pages/login/store/login.redux';

function* requestLogin(action: any) {
  const res = yield axios.get(`/api/login.json?act=${action.act}&pwd=${action.pwd}`);
  if (res.data.success) {
    yield put(loginSuccess());
  }
}

function* watchRequestLogin() {
  yield takeEvery(GET_LOGIN, requestLogin);
}

function* requestDetailData(action: any) {
  const res = yield axios.get(`/api/detail.json?id=${action.id}`);
  const data = res.data.data;
  yield put(getDetailSuccess(data));
}

function* watchRequestDetailData() {
  yield takeLatest(GET_DETAIL_DATA, requestDetailData);
}

function* requestSearcKWData() {
  const res = yield axios.get('api/headerlist.json');
  const data = res.data.data;
  yield put(getListSuccess(data));
}

function* watchREquestSKWData() {
  yield takeEvery(GET_SEARCH_KEYWORD_LIST, requestSearcKWData);
}

function* requestALData(action: any) {
  const res = yield axios.get(`api/homeList.json?page=${action.page}`);
  const data = res.data.data;
  yield put(getMoreListSuccess(data, action.page));
}

function* watchRequestALData() {
  yield takeEvery(GET_MORE_LIST, requestALData);
}

function* requestHomeData() {
  const res = yield axios.get(`api/home.json`);
  const data = res.data.data;
  yield put(getHomeDataSuccess(data));
}

function* watchRequestHomeData() {
  yield takeEvery(GET_HOME_DATA, requestHomeData);
}

export default function* rootSage() {
  yield all([
    watchRequestALData(),
    watchRequestHomeData(),
    watchREquestSKWData(),
    watchRequestDetailData(),
    watchRequestLogin()
  ]);
}
