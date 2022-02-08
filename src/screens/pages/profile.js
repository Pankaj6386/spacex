import React from 'react';
import {View, Text} from 'react-native';
import List from '../../components/List';
import Header from '../../components/header';
export default function Profile() {
  return (
    <>
      <Header />
      <View style={{alignItems: 'center'}}>
        <List />
      </View>
    </>
  );
}
