import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import UploadPhotoPage from './components/UploadPhotoPage';
import ContactInformationPage from './components/ContactInformationPage';
import CompletePage from './components/CompletePage';


class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <UploadPhotoPage />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;