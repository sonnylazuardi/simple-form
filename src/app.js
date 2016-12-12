import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, Dimensions } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Navigator from './navigator';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

export default App;