import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import UploadPhotoPage from './components/UploadPhotoPage';
import ContactInformationPage from './components/ContactInformationPage';


class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ContactInformationPage />
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