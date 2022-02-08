import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from 'react-native';
import {ellipsis} from '../../assets';
import DrawerNavigation from '../../navigation/drawerNavigation';
export default function Header(props) {
  const drawer = React.useRef(null);

  const [drawerPosition, setDrawerPosition] = React.useState('left');
  return (
    <View
      style={{
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').height * 1,
      }}>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#cdcdcd'}}>
        <View
          style={{
            flex: 0.1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>1</Text>
        </View>
        <View
          style={{
            flex: 0.4,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>2</Text>
        </View>
        <View
          style={{
            flex: 0.1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={DrawerNavigation}></DrawerLayoutAndroid> */}
          <TouchableOpacity onPress={props.onPress}>
            <Image source={ellipsis} style={{width: 18, height: 18}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
