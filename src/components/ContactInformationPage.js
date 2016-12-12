import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import { connect } from 'react-redux';
import { setInfo, validate, showContactError } from '../actions/contactAction';
import { setPageActive, setPage } from '../actions/appAction';
import FloatingLabelTextInput from './uikit/FloatingLabelTextInput';

if (Platform.OS != 'web') {
    var { KeyboardAwareScrollView } = require('react-native-keyboard-aware-scroll-view');
} else {
    var KeyboardAwareScrollView = ScrollView;
}

class ContactInformationPage extends Component {

    onChangeText(field, value) {
        this.props.setInfo(field, value);
        this.props.validate()
    }

    hideKeyboard() {
        ['firstName', 'lastName', 'contactNumber', 'address'].forEach(field => {
            this.refs[field].blur();
        });
    }

    onSubmit() {
        this.props.validate().then(({errors, valid}) => {
            if (valid) {
                this.hideKeyboard();
                this.props.setPageActive(3, true);
                this.props.setPage(3);
                this.props.showContactError(false);
            } else {
                this.props.showContactError(true);
                this.refs[Object.keys(errors)[0]].focus();
            }
        });
    }

    render() {
        const {contact} = this.props;
        const {errors, showError, valid} = contact;
        return (
            <View style={styles.container} className="page-container">
                <KeyboardAwareScrollView 
                    style={styles.page} 
                    extraHeight={218}
                    keyboardShouldPersistTaps={true} 
                    automaticallyAdjustContentInsets={false}>
                    <Text style={styles.textHeading}>Your Contact Information</Text>
                    <Text style={styles.text}>Fill in the following details</Text>
                    <View style={styles.row}>
                        <FloatingLabelTextInput 
                            style={styles.input} 
                            ref="firstName"
                            placeholder={'Your First Name'} 
                            noBorder={true} 
                            value={contact.firstName}
                            returnKeyType={'next'}
                            onChangeTextValue={this.onChangeText.bind(this, 'firstName')}
                            nextFocus={() => this.refs['lastName']} />
                        {showError && errors['firstName'] ?
                            <Text style={styles.textError}>{errors['firstName']}</Text>
                            : null}
                    </View>
                    <View style={styles.row}>
                        <FloatingLabelTextInput 
                            style={styles.input} 
                            ref="lastName"
                            placeholder={'Your Last Name'} 
                            noBorder={true} 
                            value={contact.lastName}
                            returnKeyType={'next'}
                            onChangeTextValue={this.onChangeText.bind(this, 'lastName')}
                            nextFocus={() => this.refs['contactNumber']} />
                        {showError && errors['lastName'] ?
                            <Text style={styles.textError}>{errors['lastName']}</Text>
                            : null}
                    </View>
                    <View style={styles.row}>
                        <FloatingLabelTextInput 
                            style={styles.input} 
                            ref="contactNumber"
                            placeholder={'Contact Number'} 
                            noBorder={true} 
                            keyboardType={'phone-pad'}
                            value={contact.contactNumber}
                            returnKeyType={'next'}
                            onChangeTextValue={this.onChangeText.bind(this, 'contactNumber')}
                            nextFocus={() => this.refs['address']} />
                        {showError && errors['contactNumber'] ?
                            <Text style={styles.textError}>{errors['contactNumber']}</Text>
                            : null}
                    </View>
                    <View style={styles.row}>
                        <FloatingLabelTextInput 
                            style={[styles.input, styles.inputArea]} 
                            ref="address"
                            placeholder={'Address'} 
                            noBorder={true} 
                            multiline={true} 
                            value={contact.address}
                            returnKeyType={'default'}
                            onChangeTextValue={this.onChangeText.bind(this, 'address')} />
                        {showError && errors['address'] ?
                            <Text style={styles.textError}>{errors['address']}</Text>
                            : null}
                    </View>
                </KeyboardAwareScrollView>
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
        padding: 15,
        paddingBottom: 30,
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
        marginTop: 10,
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
    input: {
        backgroundColor: '#EAEFF2',
        borderWidth: 1,
        borderColor: '#CCD6DD',
        padding: 15,
        paddingVertical: 0,
        paddingBottom: 5,
        height: 45,
        borderRadius: 4,
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

ContactInformationPage = connect(state => ({
    contact: state.contact
}), {setInfo, validate, showContactError, setPageActive, setPage})(ContactInformationPage);

export default ContactInformationPage;