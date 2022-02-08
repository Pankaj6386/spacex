import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../components/header';

const data = [
  {foodName: 'Whooper', calories: 660, correctedTerm: 'Whopper'},
  {foodName: 'Whopper Sandwich', calories: 660, correctedTerm: 'Whopper'},
  {foodName: 'Whopper with Cheese', calories: 740},
  {foodName: 'Whooper with Cheese', calories: 740},
  {foodName: 'Bacon and Cheese Whopper', calories: 790},
  {foodName: 'Bacon Double Cheeseburger', calories: 370},
  {
    foodName: 'Double Bacon Burger',
    calories: 370,
    correctedTerm: 'Bacon Double Cheeseburger',
  },
  {foodName: 'Double Whopper', foodType: 'Burger', calories: 900},
  {foodName: 'Double Whopper with Cheese', calories: 980},
  {foodName: 'Triple Whopper', calories: 1130},
  {foodName: 'Triple Whopper with Cheese', calories: 1210},
  {foodName: 'Bacon King', calories: 1150},
  {
    foodName: 'Double Whopper Bacon King',
    calories: 1150,
    correctedTerm: 'Bacon King',
  },
  {foodName: 'Farmhouse King', calories: 1220},
  {foodName: 'Farmhouse', calories: 1220},
  {foodName: 'Rodeo King', calories: 1250},
  {foodName: 'Rodeo Burger', calories: 1250},
  {foodName: 'Big King', calories: 530},
  {foodName: 'Junior Whopper', calories: 310, correctedTerm: 'Whopper Jr'},
  {foodName: 'Whopper Junior', calories: 310, correctedTerm: 'Whopper Jr'},
  {foodName: 'Jr Whopper', calories: 310, correctedTerm: 'Whopper Jr'},
];
export default function Home() {
  return (
    <View>
      <Header />
      <View style={{}}>
        <FlatList
          keyExtractor={(item, index) => {
            item.index;
          }}
          numColumns={2}
          data={data}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <View>
                  <Text>{item.item.foodName}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
