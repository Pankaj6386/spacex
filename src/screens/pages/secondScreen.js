import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteListName} from '../../action';
export default function SecondScreen() {
  const select = useSelector(state => state.ListName.list);
  const dispatch = useDispatch();
  console.log(select, 'select');
  // const select = useSelector(state => console.log(state.ListName.list,'second'));
  return (
    <View>
      <Text>secondScreen</Text>

      {select.map(item => {
        // console.log(item.data.firstName,'item')
        return (
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: 'yellow',
              marginTop: 10,
            }}>
            <Text style={styles.textStyle}>{item.data.firstName}</Text>
            <Text style={styles.textStyle}>{item.data.lastName}</Text>
            <Text style={styles.textStyle}>{item.data.email}</Text>
            <Text style={styles.textStyle}>{item.data.dob}</Text>
            <TouchableOpacity
              onPress={() => dispatch(deleteListName(item.id))}
              style={{position: 'absolute', marginLeft: 350, top: 1}}>
              <Image
                source={require('../../images/delete.jpg')}
                style={{
                  height: 38,
                  width: 28,
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontFamily: 'GothamLight',
  },
});
