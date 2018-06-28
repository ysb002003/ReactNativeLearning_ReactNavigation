import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class SearchPage extends Component {
    render() {
        const param1 = this.props.navigation.getParam('param1', 0);
        const param2 = this.props.navigation.getParam('param2');
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}>
                </StatusBar>
                <Text style={{ margin: 10, fontSize: 20, color: 'black' }}>搜索{param1} {param2}</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});