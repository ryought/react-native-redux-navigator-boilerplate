import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

// import screens
import A from '../containers/A.js'
import B from '../containers/B.js'

// register screens to navigator
export const AppNavigator = StackNavigator({
  A: {screen: A},
  B: {screen: B},
},
{ headerMode: 'screen' }
);

// navigator component
const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
);

// store has a state of navigation screen
// initial screen is defined in reducers/nav.js
export default connect(
  state => ({
    nav: state.nav
  })
)(AppWithNavigationState);
