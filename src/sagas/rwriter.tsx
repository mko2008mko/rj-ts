import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { GET_RWRITER_DATA, getrwriterDataSuccess } from '../pages/recommendWriter/store/rwriter.redux';

function* requestRWriter(action: any) {
  try {
    const res = yield axios.get(`api/recommendWriter.json?page=${action.page}`);
    const data = res.data.data;
    yield put(getrwriterDataSuccess(data, action.page));
  } catch (error) {}
}

export default function* watchRequestRWriter() {
  yield takeEvery(GET_RWRITER_DATA, requestRWriter);
}
