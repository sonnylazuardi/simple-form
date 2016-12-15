import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, Dimensions, Platform } from 'react-native';
import UploadPhotoPage from './components/UploadPhotoPage';
import ContactInformationPage from './components/ContactInformationPage';
import CompletePage from './components/CompletePage';

import { TabViewAnimated } from 'react-native-tab-view';
import TabBar from './components/uikit/TabBar';

import { connect } from 'react-redux';
import { setPageActive, setIndex } from './actions/appAction';
import { resetContact } from './actions/contactAction';

if (Platform.OS == 'web' || Platform.OS == 'android') {
    var KeyboardAvoidingView = View;
} else {
    var {KeyboardAvoidingView} = require('react-native')
}

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
};

class Navigator extends Component {
    handleChangeTab = (index) => {
        this.props.setIndex(index);
    };

    renderLabel = ({ route }, focused) => {
        let color = '#9B9B9B';
        if (route.active) {
            if (focused) {
                color = '#363A45';
            } else {
                color = '#00B23E';
            }
        }
        return route.title ? 
            <Animated.Text style={[styles.tabLabel, {color}]}>
                {route.title}
            </Animated.Text> 
            : null;
    };

    renderHeader = (props) => {
        return (
            <View>
                <TabBar
                    {...props}
                    pressColor={'#ddd'}
                    renderIndicator={this.renderIndicator}
                    style={styles.tabbar}
                    tabStyle={styles.tab}
                    renderLabel={this.renderLabel}
                    />
            </View>
        )
    };

    renderIndicator = (props) => {
        const { width, position } = props;
        const translateX = Animated.multiply(position, new Animated.Value(width));

        return (
            <Animated.View
                style={[ styles.indicator, { width: width, transform: [ { translateX } ] } ]}
            />
        );
    };

    renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <UploadPhotoPage />
            case '2':
                return <ContactInformationPage />
            case '3':
                return <CompletePage />
            default:
                return null;
        }
    };

    canJumpToTab = (route) => {
        return route.active;
    };

    componentWillReceiveProps(nextProps) {
        const {contact, photo} = this.props;
        if (contact.valid && !nextProps.contact.valid) {
            this.props.setPageActive(3, false);
        }
        if (photo.valid && !nextProps.photo.valid) {
            this.props.resetContact();
            this.props.setPageActive(2, false);
            this.props.setPageActive(3, false);
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.toolbar} />
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.props.app}
                    renderScene={this.renderScene}
                    renderHeader={this.renderHeader}
                    onRequestChangeTab={this.handleChangeTab}
                    initialLayout={initialLayout}
                    canJumpToTab={this.canJumpToTab}
                    />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: Platform.OS == 'ios' ? 65 : 50,
        backgroundColor: '#00B140',
    },
    container: {
        flex: 1
    },
    tabbar: {
        backgroundColor: '#fff'
    },
    tab: {
        opacity: 1,
        padding: 15
    },
    tabLabel: {
        fontSize: 13,
        backgroundColor: 'transparent'
    },
    iconNext: {
        width: 15,
        height: 15
    },
    indicator: {
        flex: 1,
        backgroundColor: 'transparent',
        borderBottomColor: '#00B140',
        borderBottomWidth: 3,
        margin: 0
    },
});

Navigator = connect(state => ({
    app: state.app,
    photo: state.photo,
    contact: state.contact
}), {setPageActive, setIndex, resetContact})(Navigator);

export default Navigator;