import React from 'react';
import { Text, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
  console.log(props);
  // props.navigation.navigate();
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Componente SignIn</Text>
      <Button
        title="Navegar a SignUp"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Componente SignUp</Text>
      <Button
        title="Regresar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

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
