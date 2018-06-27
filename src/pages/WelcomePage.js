import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import theme from '../config/theme';

export default class WelcomePage extends Component {
    render() {
        return (
            <Image style={{ width: theme.screenWidth, height: theme.screenHeight }}
                source={require('../images/launch.jpg')}
                resizeMode='cover'>
            </Image>
        );
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.replace('BottomTab'); //还有个push
            this.timer && clearTimeout(this.timer);
        }, 3000);
    }
}
