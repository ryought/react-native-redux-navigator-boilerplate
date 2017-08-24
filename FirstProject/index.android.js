/**
 * Sample React Native App
 * https://github.com/ryought/react-native-redux-navigator-boilerplate
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// reducers
import * as reducers from './app/reducers';
// navigator
import AppWithNavigationState from './app/navigators/AppNavigator';
// create store
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FirstProject', () => App);
