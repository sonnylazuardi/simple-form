import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Platform, Dimensions} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { setSource, showPhotoError } from '../actions/photoAction';
import { activatePage, setPage } from '../actions/appAction';

class UploadPhotoPage extends Component {

    chooseImage() {
        const options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                // You can display the image using either data...
                const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                } else {
                    const source = {uri: response.uri, isStatic: true};
                }

                this.props.setSource(source);
            }
        });
    }

    resetImage() {
        this.props.setSource(null);
    }

    onSubmit() {
        // only proceed if valid
        const {valid} = this.props.photo;
        if (valid) {
            this.props.activatePage(2);
            this.props.setPage(2);
            this.props.showPhotoError(false);
        } else {
            this.props.showPhotoError(true);
        }
    }

    render() {
        const {valid, source, showError} = this.props.photo;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.page}>
                    <View style={styles.row}>
                        <Text style={styles.textHeading}>Upload Photo</Text>
                        {showError ?
                            <Text style={styles.textError}>You need to upload a photo</Text>
                            : null}
                    </View>

                    <View style={styles.buttonAddWrapper}>
                        {!source ?
                            <TouchableOpacity onPress={this.chooseImage.bind(this)}>
                                <View style={styles.buttonAddIcon}>
                                    <Image source={require('../images/icon-add.png')} style={styles.iconAdd} />
                                    <Text style={styles.textAdd}>Add Photo</Text>
                                </View>
                            </TouchableOpacity>
                            :
                            <View>
                                <Image source={source} style={{width: Dimensions.get('window').width - 30, height: 200}} resizeMode={'contain'}/>
                                <TouchableOpacity onPress={this.resetImage.bind(this)}>
                                    <View style={styles.buttonClear}>
                                        <Text style={styles.textClear}>X</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>}
                    </View>
                    <Text style={styles.text}>Please upload any photo here.</Text>
                    
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.onSubmit.bind(this)}>
                        <View style={[styles.buttonNextWrapper, !valid ? styles.buttonNextInvalid : null]}>
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
        marginBottom: 15,
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
    buttonNextInvalid: {
        backgroundColor: '#CCD6DD',
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
    },
    buttonClear: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#00B140',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -210,
        right: -10,
    },
    textClear: {
        color: '#fff',
        fontSize: 15
    },
    row: {
        marginBottom: 10,
    },
    textError: {
        color: '#D64425',
        fontSize: 11,
        marginHorizontal: 15,
        marginVertical: 5,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'transparent'
    }

});

UploadPhotoPage = connect(state => ({
    photo: state.photo
}), {setSource, activatePage, setPage, showPhotoError})(UploadPhotoPage);

export default UploadPhotoPage;