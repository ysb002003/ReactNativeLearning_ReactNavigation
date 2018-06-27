import { Dimensions, Platform } from 'react-native';

export default module = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,

    primaryColor: '#ee0000',
    lightGray: '#f5f5f5',
    darkGray: '#e5e5e5',
    lightBlack: '#333333',
    actionBar: {
        height: Platform.OS === 'android' ? 56 : 44,
        backgroundColor: '#fff'
    },
    barContentPad: (Platform.OS === 'android' ? 0 : 20),
    bottomPadding: isIphoneX() ? 18 : 0,
    btnActiveOpacity: 0.5
}

export function isIphoneX(){
    return false;
}