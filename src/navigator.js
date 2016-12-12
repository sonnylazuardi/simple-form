import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, Dimensions } from 'react-native';
import UploadPhotoPage from './components/UploadPhotoPage';
import ContactInformationPage from './components/ContactInformationPage';
import CompletePage from './components/CompletePage';

import { TabViewAnimated } from 'react-native-tab-view';
import TabBar from './components/uikit/TabBar';

import { connect } from 'react-redux';
import { activatePage, setIndex } from './actions/appAction';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
};

class Navigator extends Component {
    handleChangeTab = (index) => {
        this.props.setIndex(index);
    };

    renderLabel = ({ route }, focused) => {
        let tabStyle = styles.tabLabelInactive;
        if (route.active) {
            if (focused) {
                tabStyle = styles.tabLabel;
            } else {
                tabStyle = styles.tabLabelActive;
            }
        }
        return route.title ? 
            <Text style={tabStyle}>
                {route.title}
            </Text> 
            : null;
    };

    renderHeader = (props) => {
        return (
            <View>
                <TabBar
                    {...props}
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

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 65,
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
        color: '#363A45',
        fontSize: 13,
        backgroundColor: 'transparent'
    },
    tabLabelInactive: {
        color: '#9B9B9B',
        fontSize: 13,
        backgroundColor: 'transparent'
    },
    tabLabelActive: {
        color: '#00B23E',
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
    app: state.app
}), {activatePage, setIndex})(Navigator);

export default Navigator;