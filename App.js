/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './src/reducers'
// import YKienContainer from './src/containers/YKienContainer';

import AppNavigation from './src/navigations'

//redux saga
import createSagaMiddeware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddware = createSagaMiddeware();
let store = createStore(allReducers, applyMiddleware(sagaMiddware));

export default class App extends Component<{}> {
  render() {
    return (
       <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

sagaMiddware.run(rootSaga); 

