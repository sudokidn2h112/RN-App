import AppNavigator from "../navigations/navigationStack";
import {YKien} from '../../commons/screenNames';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(YKien)
);
const navigationReducers = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducers;