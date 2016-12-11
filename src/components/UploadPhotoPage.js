import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Toolbar from './uikit/Toolbar';

class UploadPhotoPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Toolbar />
                <ScrollView style={styles.page}>
                    <Text style={styles.textHeading}>Upload Photo</Text>
                    <View style={styles.buttonAddWrapper}>
                        <View style={styles.buttonAddIcon}>
                            <Image source={require('../images/icon-add.png')} style={styles.iconAdd} />
                            <Text style={styles.textAdd}>Add Photo</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>Please upload any photo here.</Text>
                    
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity >
                        <View style={styles.buttonNextWrapper}>
                            <Text style={styles.buttonNextText}>NEXT</Text>
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
        padding: 15
    },
    footer: {
        backgroundColor: '#F7F9FB',
    },
    buttonAddWrapper: {
        height: 200,
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
    text: {
        margin: 15,
        color: '#565D6B',
        fontSize: 13
    },
    textHeading: {
        margin: 15,
        marginVertical: 20,
        color: '#363A45',
        fontSize: 16
    },
    buttonNextWrapper: {
        height: 40, 
        backgroundColor: '#00B140',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 10
    },
    buttonNextText: {
        color: '#fff'
    },
    iconAdd: {
        width: 30,
        height: 30
    },
    textAdd: {
        fontSize: 13,
        marginTop: 10,
        color: '#00B140'
    }

});

export default UploadPhotoPage;