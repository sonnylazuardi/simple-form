import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class IconArrow extends Component {
    render() {
        return (
            <View 
                style={styles.iconWrapper}>
                <Image source={require('../../images/icon-next.png')} style={styles.iconArrow}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconWrapper: {
        width: 15, 
        justifyContent: 'center'
    },
    iconArrow: {
        height: 15,
        width: 15
    }
});

export default IconArrow;