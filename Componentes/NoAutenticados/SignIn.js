// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignInForm from './Formas/SignInForm';

// create a component
class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm />
        <Button
          title="SignUp"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});

// make this component available to the app
export default SignIn;
