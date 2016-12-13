import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import App from './src/app';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
    rootTag: document.getElementById('react-root')
});