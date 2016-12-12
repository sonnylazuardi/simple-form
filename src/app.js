import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, Dimensions } from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

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