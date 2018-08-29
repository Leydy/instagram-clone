import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
  console.log(props);
  return <Text>Componente SignIn</Text>;
};
const SignUp = () => <Text>Componente SignUp</Text>;

const RutasNoAutenticadas = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});
export { RutasNoAutenticadas };
