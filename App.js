/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';

import IndexPage from './src/pages/IndexPage';
import WelcomePage from './src/pages/WelcomePage';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

const App = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      gesturesEnabled: true,//是否可以使用手势关闭此屏幕
      headerTitle: null//去掉 react-navigation提供的标题
    }
  },
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: null
    }
  }
}, {
    mode: 'card', //页面切换模式，左右：card, 上下：modal
    headerMode: 'none', //默认导航栏：screen渐变，float:无透明效果，none隐藏
    transitionConfig: () => ({ //切换动画
      screenInterpolator: CardStackStyleInterpolator.forHorizontal //水平
    })
  });

export default App