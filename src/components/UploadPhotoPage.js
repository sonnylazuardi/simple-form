import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Toolbar from './uikit/Toolbar';

class UploadPhotoPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Toolbar />
                <View style={styles.page}>
                    <Text style={styles.text}>Upload Photo</Text>
                    <View style={styles.buttonAddWrapper}>
                        <View style={styles.buttonAddIcon}>
                            <Image source={require('../images/icon-add.png')} />
                            <Text style={styles.buttonAddText}>Add Photo</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>!! Please upload any photo here.</Text>

                    <TouchableOpacity style={styles.buttonNextWrapper}>
                        <View style={styles.buttonNextWrapper}>
                            <Text style={styles.buttonNextText}>Next</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    page: {
        flex: 1,
        backgroundColor: '#F7F9FB',
        padding: 10
    },
    buttonAddWrapper: {
        height: 260,
        borderWidth: 1,
        borderColor: '#CCD6DD',
        borderRadius: 4,
        backgroundColor: '#EAEFF2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAddIcon: {
        alignItems: 'center'
    },
    buttonAddText: {
        marginTop: 5,
        color: '#00B140'
    },
    text: {
        margin: 10
    },
    buttonNextWrapper: {
        backgroundColor: '#F7F9FB',
        margin: 10,
    },
    buttonNextText: {
        color: '#fff'
    }

});

export default UploadPhotoPage;