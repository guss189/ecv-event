import AppConstants from '../../app/app.constants';

const INITIAL_STATE = {
  uid: null,
}

function generalReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case AppConstants.ACTIONS.SAGA_SET_USER_CONNECTED:
      return {
        ...state,
        uid: action.payload.uid,
      };
      break;
    default:
      return state;
  }
}

export default generalReducer;
