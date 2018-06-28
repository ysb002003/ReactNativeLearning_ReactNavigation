import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { MaterialTopTabBar } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

class CustomeTabBar extends Component {
    render() {
        return (
            <View style={{ position: 'relative', backgroundColor: '#fff' }}>
                <MaterialTopTabBar {...this.props} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchPage', { param1: 'param1', param2: 'param2' })}
                    style={{ position: 'absolute', right: 12, bottom: 10 }}>
                    <Ionicons name={'ios-search-outline'}
                        size={22}
                        color={'#666666'}
                    ></Ionicons>
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(CustomeTabBar);