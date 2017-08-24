import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

// definition of initial screen
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('A'));

export default function nav(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
