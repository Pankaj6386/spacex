import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const TextInputs = ({placeholder,values,onChangeTexts,keyboardtype,...props}) => {
  return (
      <View style={styles.container}>
          <TextInput placeholder={placeholder} maxLength={30} value={values}
              keyboardType={keyboardtype}
              onChangeText={onChangeTexts} style={styles.textStyle}
              {...props}/>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textStyle: {
        backgroundColor: '#cdcdcd',
        width: '85%',
        paddingHorizontal: 20,
        marginTop:30
    }
});
