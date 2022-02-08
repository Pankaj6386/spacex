import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toDoAdd, toDoDelete} from '../action';
export default function List() {
  const [inputData, setInputData] = React.useState('');
  const dispatch = useDispatch();
  const select = useSelector(state => state.todoReducer.list);

  return (
    <View>
      <Text style={{textAlign: 'center'}}>ToDo List</Text>
      <View style={{backgroundColor: '#cdcdcd', width: 250}}>
        <TextInput
          placeholder="Enter text"
          value={inputData}
          onChangeText={value => setInputData(value)}
        />
        <TouchableOpacity
          onPress={() => dispatch(toDoAdd(inputData), setInputData(''))}
          style={{position: 'absolute', marginLeft: 220, top: 5}}>
          <Image
            source={require('../images/add.jpg')}
            style={{
              height: 38,
              width: 28,
            }}
          />
        </TouchableOpacity>
      </View>
      {select.map(item => {
        return (
          <View
            key={item.id}
            style={{backgroundColor: 'red', width: 250, marginTop: 10}}>
            <Text style={{padding: 10}}>{item.data}</Text>
            <TouchableOpacity
              onPress={() => dispatch(toDoDelete(item.id), setInputData(''))}
              style={{position: 'absolute', marginLeft: 220, top: 1}}>
              <Image
                source={require('../images/delete.jpg')}
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
