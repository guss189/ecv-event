import { all, fork } from 'redux-saga/effects';

import generalSaga from './general-saga';

const sagas = [
  generalSaga,
];

function* rootSaga(){
  yield all(sagas.map(saga => fork(saga)));
}

export default rootSaga;
