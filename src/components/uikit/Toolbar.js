import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Toolbar extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    
                </View>
                <View style={styles.steps}>
                    <View style={styles.step}>
                        <Text>Step 1</Text>
                    </View>
                    <View style={styles.step}>
                        <Text>Step 2</Text>
                    </View>
                    <View style={styles.step}>
                        <Text>Step 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 90,
        backgroundColor: '#00B140',
    },
    steps: {
        height: 66,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    step: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Toolbar;