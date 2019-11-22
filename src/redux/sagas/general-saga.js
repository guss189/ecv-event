import { takeLatest, call, put } from 'redux-saga/effects';
import AppConstants from '../../app/app.constants';

function* setUserConnectedSaga(action){
  yield put({
    type: AppConstants.ACTIONS.SAGA_SET_USER_CONNECTED,
    payload: {
      uid : action.payload.uid,
    }
  })
}

function* watch() {
  yield takeLatest(AppConstants.ACTIONS.ACTION_SET_USER_CONNECTED,setUserConnectedSaga);
}

export default watch;
