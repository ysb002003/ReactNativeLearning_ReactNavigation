/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import Icon from 'react-native-vector-icons/Ionicons';

import IndexPage from './src/pages/IndexPage';
import WelcomePage from './src/pages/WelcomePage';

import CategoryPage from './src/pages/Category/CategoryPage';
import CartPage from './src/pages/CartPage';
import MyPage from './src/pages/MyPage';
import BrandPage from './src/pages/Category/BrandPage';

import theme from './src/config/theme';

const CategoryPageTopTab = createMaterialTopTabNavigator({
  CategoryPage: {
    screen: CategoryPage,
    navigationOptions: {
      tabBarLabel: '品类'
    }
  },
  BrandPage: {
    screen: BrandPage,
    navigationOptions: {
      tabBarLabel: '品牌'
    }
  }
}, {
    swipeEnabled: true, //是否可以左右滑动
    animationEnabled: true, // 切换页面时是否有动画效果
    backBehavior: 'none',// 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      labelStyle: {

      },
      style: {
        height: theme.actionBar.height + theme.barContentPad,
        marginHorizontal: theme.screenWidth / 6,
        paddingTop: theme.barContentPad,
        backgroundColor: '#fff'
      },
      tabStyle: {
        width: theme.screenWidth / 3
      },
      activeBackgroundColor: '#fff',
      activeTintColor: theme.primaryColor, //活跃状态下前景色
      inactiveBackgroundColor: '#fff',
      inactiveTintColor: theme.lightBlack,
      showIcon: false,
      showLabel: true,
      pressOpacity: 0.3,
      indicatorStyle: {
        height: 2,
        width: theme.screenWidth / 9,
        backgroundColor: theme.primaryColor,
        left: theme.screenWidth / 9
      }
    },
    // tabBarComponent: (props) => (
    //   <CustomeTabBar {...props} />
    // )
  });

const BottomTab = createBottomTabNavigator({
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      header: null,
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`ios-home${focused ? '' : '-outline'}`} size={25} color={tintColor} />
      )
    }
  },
  CategoryPage: {
    screen: CategoryPageTopTab,
    navigationOptions: {
      header: null,
      tabBarLabel: '分类',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name={`ios-apps${focused ? '' : '-outline'}`} size={25} color={tintColor} />
      )
    }
  },
  CartPage: {
    screen: CartPage,
    navigationOptions: {
      header: null,
      tabBarLabel: '购物车',
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name={`ios-cart${focused ? '' : '-outline'}`} size={25} color={tintColor} />;
      }
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      header: null,
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name={`ios-person${focused ? '' : '-outline'}`} size={25} color={tintColor} />;
      }
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: theme.primaryColor,
      inactiveBackgroundColor: theme.lightGray,
    }
  });

const App = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      gesturesEnabled: true,//是否可以使用手势关闭此屏幕
      headerTitle: null//去掉 react-navigation提供的标题
    }
  },
  BottomTab: {
    screen: BottomTab,
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