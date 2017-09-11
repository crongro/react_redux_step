import { call, put, takeLatest } from 'redux-saga/effects'
import {fakeInitData} from './fakedb/db';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const initData = yield call(fakeInitData);
      yield put({type: "DATA_FETCH_SUCCEEDED", data : initData});
   } catch (e) {
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log('error on sagas precess..');
   }
}


function* mySaga() {
  yield takeLatest("DATA_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
