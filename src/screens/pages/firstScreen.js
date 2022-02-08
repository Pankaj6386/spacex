import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, Dimensions} from 'react-native';
import List from '../../components/List';
import TextInputs from '../../components/inputfields';
import {useDispatch} from 'react-redux';
import {showListName} from '../../action';
const {width, height} = Dimensions.get('window');
export default function FirstScreen({navigation}) {
  const dispatch = useDispatch();
  const string = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorLastName, setErrorLastName] = useState(null);
  const [errorDob, setErrorDob] = useState(null);
  const username = str => {
    if (str === '') {
      setErrorName('*Please enter name.');
    } else if (!string.test(str)) {
      setErrorName('*Please enter valid name.');
    } else {
      setErrorName(null);
    }
  };
  const lname = str => {
    if (str === '') {
      setErrorLastName('*Please enter last name.');
    } else if (!string.test(str)) {
      setErrorLastName('*Please enter valid last name.');
    } else {
      setErrorLastName(null);
    }
  };
  const _emailvalidate = mail => {
    if (mail === '') {
      setErrorEmail('*Please enter email.');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('*Please enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };
  const handleDob = dob => {
    if (dob === '') {
      setErrorDob('*Please enter DOB.');
    } else {
      setErrorDob(null);
    }
  };

  const onSubmit = () => {
    if (firstName === '') {
      setErrorName('*Please enter name.');
    } else if (lastName === '') {
      setErrorLastName('*Please enter last name.');
    } else if (email === '') {
      setErrorEmail('*Please enter email.');
    } else if (dob === '') {
      setErrorDob('*Please enter DOB.');
    } else {
      dispatch(
        showListName({firstName, lastName, email, dob}),
        setFirstName(''),
        setLastName(''),
        setEmail(''),
        setDob(''),
      );
      navigation.navigate('secondscreen');
    }
  };
  return (
    <>
      <TextInputs
        placeholder="First Name"
        value={firstName}
        onChangeTexts={text => {
          [setFirstName(text), username(text)];
        }}
      />
      {errorName != null ? (
        <View
          style={{
            height: height * 0.04,
            width: width * 1,
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 13,
              fontFamily: 'GothamMedium',
              marginHorizontal: 35,
            }}>
            {errorName}
          </Text>
        </View>
      ) : null}

      <TextInputs
        placeholder="Last Name"
        value={lastName}
        onChangeTexts={text => {
          setLastName(text), lname(text);
        }}
      />
      {errorLastName != null ? (
        <View
          style={{
            height: height * 0.04,
            width: width * 1,
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 13,
              fontFamily: 'GothamMedium',
              marginHorizontal: 35,
            }}>
            {errorLastName}
          </Text>
        </View>
      ) : null}

      <TextInputs
        placeholder="Email"
        keyboardtype="email-address"
        value={email}
        onChangeTexts={text => {
          setEmail(text), _emailvalidate(text);
        }}
      />
      {errorEmail != null ? (
        <View
          style={{
            height: height * 0.04,
            width: width * 1,
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 13,
              fontFamily: 'GothamMedium',
              marginHorizontal: 35,
            }}>
            {errorEmail}
          </Text>
        </View>
      ) : null}

      <TextInputs
        placeholder="DD-MM-YYYY"
        keyboardtype="numeric"
        value={dob}
        onChangeTexts={text => {
          setDob(text), handleDob(text);
        }}
      />
      {errorDob != null ? (
        <View
          style={{
            height: height * 0.04,
            width: width * 1,
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 13,
              fontFamily: 'GothamMedium',
              marginHorizontal: 35,
            }}>
            {errorDob}
          </Text>
        </View>
      ) : null}
      <TouchableOpacity
        style={{
          marginTop: 30,
          width: '85%',
          marginLeft: 30,
          backgroundColor: '#008CBA',
        }}
        activeOpacity={0.8}
        onPress={onSubmit}>
        <Text
          style={{
            paddingVertical: 12,
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'GothamMedium',
          }}>
          ADD
        </Text>
      </TouchableOpacity>
    </>
  );
}
