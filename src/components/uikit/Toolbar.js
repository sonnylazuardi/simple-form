import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Toolbar extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    
                </View>
                <View style={styles.steps}>
                    <View style={styles.step}>
                        <Text style={styles.textStep}>Step 1</Text>
                    </View>
                    <Image source={require('../../images/icon-next.png')} style={styles.iconNext}/>
                    <View style={styles.step}>
                        <Text style={styles.textStep}>Step 2</Text>
                    </View>
                    <Image source={require('../../images/icon-next.png')} style={styles.iconNext}/>
                    <View style={styles.step}>
                        <Text style={styles.textStep}>Step 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 65,
        backgroundColor: '#00B140',
    },
    steps: {
        height: 45,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    step: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconNext: {
        width: 15,
        height: 15
    },
    textStep: {
        fontSize: 13
    }
});

export default Toolbar;