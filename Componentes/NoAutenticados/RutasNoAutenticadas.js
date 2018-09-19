import React from 'react';
import { Text, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RutasNoAutenticadas = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      // // navigationOptions: {
      // //   header: null,

      // },
    },
    SignUp: {
      screen: SignUp,
      // navigationOptions: {
      //   title: 'SignUp título desde screen',
      // },
    },
  },
  {
    headerMode: 'none',
  },
  //  El Stack sigue esta configuracion
  //   navigationOptions: {
  //     title: 'Titulo del desde el StackNavigator',
  // //   },
  // },
);
export { RutasNoAutenticadas };
