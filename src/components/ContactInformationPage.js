import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

class UploadPhotoPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.page}>
                    <Text style={styles.textHeading}>Your Contact Information</Text>
                    <Text style={styles.text}>Fill in the following details</Text>
                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder={'Your First Name'} />
                        <Text style={styles.textError}>This field cannot be empty</Text>
                    </View>
                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder={'Your Last Name'} />
                    </View>
                    <View style={styles.row}>
                        <TextInput style={styles.input} placeholder={'Contact Number'} />
                    </View>
                    <View style={styles.row}>
                        <TextInput style={[styles.input, styles.inputArea]} placeholder={'Address'} multiline={true} />
                    </View>
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
        marginTop: 5,
        color: '#565D6B',
        fontSize: 13
    },
    textHeading: {
        margin: 15,
        marginTop: 20,
        marginBottom: 0,
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
    },
    input: {
        backgroundColor: '#EAEFF2',
        borderWidth: 1,
        borderColor: '#CCD6DD',
        padding: 15,
        paddingVertical: 10,
        paddingBottom: 5,
        height: 45,
        borderRadius: 4,
        fontSize: 16,
        marginBottom: 20
    },
    row: {
        marginBottom: 10,
    },
    inputArea: {
        height: 90,

    },
    textError: {
        color: '#D64425',
        fontSize: 11,
        marginHorizontal: 15,
        marginVertical: 5,
        position: 'absolute',
        bottom: 0,
    }

});

export default UploadPhotoPage;