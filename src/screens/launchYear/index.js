import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {search, remove} from '../../assets/';
const LunchYear = ({navigation}) => {
  const [itemDatas, setItemDatas] = useState('');
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch('https://api.spaceXdata.com/v3/launches?limit=100').then(res => {
      res.json().then(result => {
        console.log(result, 'result');
        setList(result);
      });
    });
  }, []);
  function onPressSearchCross(text) {
    // setIsOpenSearch(false);
    chargingHistory(text);
    // setSearchText('');
    console.log(list, 'click list');
  }
  const chargingHistory = text => {
    fetch(
      'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true',
    ).then(res => {
      res.json().then(result => {
        console.log(result, 'result');
        setList(result.filter(i => i.launch_year.includes(text)));
      });
    });
  };
  const showData = data => {
    // console.log(data, 'data');
    setShow(true);
    setItemDatas(data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>SpaceX Lunch Program</Text>
      <View style={styles.viewFilters}>
        <Text style={[styles.textStyle, {textAlign: 'auto'}]}>Filters</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Launch Year"
            value={searchText}
            onChangeText={text => {
              setSearchText(text), onPressSearchCross(text);
            }}
          />
        </View>
        <FlatList
          data={list}
          numColumns={3}
          renderItem={({item, index}) => {
            console.log('item', item, 'flight', index);
            return (
              <TouchableOpacity
                onPress={() => {
                  showData(item);
                }}
                activeOpacity={0.7}
                style={{
                  backgroundColor: 'lightgreen',
                  width: 80,
                  marginTop: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  // justifyContent: 'space-between',
                  marginLeft: 27,
                }}>
                <Text style={{textAlign: 'center'}}>{item.launch_year}</Text>
              </TouchableOpacity>
            );
          }}
        />

        {show && (
          // console.log(itemDatas.launch_success, 'itemdatas')
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              paddingVertical: 10,
              marginTop: 10,
              elevation: 3,
            }}>
            <View>
              <Image
                source={{
                  uri: itemDatas.links.mission_patch,
                }}
                style={{backgroundColor: '#D3D3D3', width: 150, height: 160}}
              />
              <TouchableOpacity
                onPress={() => setShow(false)}
                style={{position: 'absolute'}}>
                <Image
                  source={remove}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 210,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text>FalconSat : - {itemDatas.launch_date_unix}</Text>
              <Text>Mission Ids : - {itemDatas.mission_name}</Text>
              <Text>launch Year : - {itemDatas.launch_year} </Text>
              <Text>Successful Launch : - {itemDatas.launch_success}</Text>
              <Text>Successful Landing : (launch_landing)</Text>
            </View>
          </View>
        )}
        {/* <ScrollView>
          {list.map(item => {
            console.log('item', item.launch_year);
            return (
              <View
                style={{
                  backgroundColor: 'lightgreen',
                  width: 80,
                  marginTop: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}>
                <Text style={{textAlign: 'center'}}>{item.launch_year}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </View>
  );
};

export default LunchYear;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3e8e4',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewFilters: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    height: '90%',
    marginTop: 5,
    borderRadius: 10,
    padding: 10,
  },
});
