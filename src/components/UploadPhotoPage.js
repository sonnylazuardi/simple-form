import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Platform, Dimensions, Animated} from 'react-native';
import { connect } from 'react-redux';
import { setSource, showPhotoError } from '../actions/photoAction';
import { setPageActive, setPage } from '../actions/appAction';

if (Platform.OS != 'web') {
    var ImagePicker = require('react-native-image-picker');
    var ImageView = require('react-native').Image;
} else {
    var ImagePicker = {showImagePicker: () => {}};
    var Image = window.Image;
    var ImageView = require('react-native').Image;
}

class BounceInView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: new Animated.Value(0),
        };
    }
    componentDidMount() {
        Animated.spring(
            this.state.scale,
            {
                toValue: 1,
                tension: 40
            }
        ).start();
    }
    render() {
        return (
            <Animated.View
                style={{transform: [{scale: this.state.scale}]}}>
                {this.props.children}
            </Animated.View>
        );
    }
}

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
                this.props.showPhotoError(false);
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
            this.props.setPageActive(2, true);
            this.props.setPage(2);
            this.props.showPhotoError(false);
        } else {
            this.props.showPhotoError(true);
        }
    }

    handleShowImage(e) {
        var self = this;
        if (e.target.files && e.target.files.length) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onloadend = () => {
                var img = new Image();
                // On android 4.0 base64 value is missing the mime type. this line is forcing the invalid value to use image/jpeg.
                img.src = !file.type.length ? reader.result.replace('data:base64,','data:image/jpeg;base64,') : reader.result;

                // Use interval instead of onLoad because somehow in android 4.0 the onLoad event is not triggered.
                var imageInterval = setInterval(() => {
                    if (reader.error) {
                        clearInterval(imageInterval);
                        console.log(reader.error);
                    }

                    if (img.complete) {
                        clearInterval(imageInterval);

                        // compress
                        var cvs = document.getElementById('imageCanvas');
                        cvs.width = img.width;
                        cvs.height = img.height;

                        cvs.getContext("2d").fillRect(0, 0, img.width, img.height);
                        cvs.getContext("2d").drawImage(img, 0, 0, img.width, img.height);

                        const source = cvs.toDataURL("image/jpeg", 70);
                        self.props.setSource({uri: source});
                    }
                }, 1);
            }

            reader.readAsDataURL(file);
        }
    }

    render() {
        const {valid, source, showError} = this.props.photo;
        return (
            <View style={styles.container} className="page-container">
                <ScrollView style={styles.page}>
                    <View style={styles.row}>
                        <Text style={styles.textHeading}>Upload Photo</Text>
                        {showError ?
                            <Text style={styles.textError}>You need to upload a photo</Text>
                            : null}
                    </View>

                    <View style={styles.buttonAddWrapper}>
                        {!source ?
                            (Platform.OS == 'web' ?
                                <View style={styles.buttonAddIcon}>
                                    <ImageView source={require('../images/icon-add.png')} style={styles.iconAdd} />
                                    <Text style={styles.textAdd}>Add Photo</Text>
                                    <canvas id={'imageCanvas'} style={{display: 'none'}}/>
                                    <input
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            zIndex: 20,
                                            opacity: 0
                                        }}
                                        type="file"
                                        id={'imageField'}
                                        name={'imageField'}
                                        onChange={this.handleShowImage.bind(this)}
                                        accept="image/*" />
                                </View>
                                :
                                <TouchableOpacity onPress={this.chooseImage.bind(this)}>
                                    <View style={styles.buttonAddIcon}>
                                        <ImageView source={require('../images/icon-add.png')} style={styles.iconAdd} />
                                        <Text style={styles.textAdd}>Add Photo</Text>
                                    </View>
                                </TouchableOpacity>)
                            :
                            <BounceInView>
                                <ImageView source={source} style={{width: Dimensions.get('window').width - 30, height: 200}} resizeMode={'contain'}/>
                                <TouchableOpacity onPress={this.resetImage.bind(this)} style={styles.buttonClearWrapper}>
                                    <View style={styles.buttonClear}>
                                        <Text style={styles.textClear}>X</Text>
                                    </View>
                                </TouchableOpacity>
                            </BounceInView>}
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
        overflow: 'visible',
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
        marginTop: 10,
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
        zIndex: 20,
    },
    buttonClearWrapper: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
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
}), {setSource, setPageActive, setPage, showPhotoError})(UploadPhotoPage);

export default UploadPhotoPage;