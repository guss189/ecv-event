import AppConstants from '../../app/app.constants';

export function setUserConnected(val){
  return {
    type: AppConstants.ACTIONS.ACTION_SET_USER_CONNECTED,
    payload: {
      uid: val
    }
  }
}
