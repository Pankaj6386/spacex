import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {incNumber, decNumber} from '../../action';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/header';
export default function Search() {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Header />
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => dispatch(incNumber(5))}>
          <Text style={{fontSize: 20}}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 20}}>{myState}</Text>
        <TouchableOpacity onPress={() => dispatch(decNumber(5))}>
          <Text style={{fontSize: 20}}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
