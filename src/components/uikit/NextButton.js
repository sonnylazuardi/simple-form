import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

class NextButton extends Component {
    render() {
        const {valid} = this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.buttonNextWrapper, !valid ? styles.buttonNextInvalid : null]}>
                    <Text style={styles.buttonNextText}>NEXT</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
});

export default NextButton;