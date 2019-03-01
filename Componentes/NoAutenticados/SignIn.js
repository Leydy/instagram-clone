// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';


// create a component
class SignIn extends Component {
  signInDeUsuario = (values) => {
    this.props.login(values);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.signInDeUsuario} />
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
const mapStateToProps = state => ({
  prop: state.prop,
});
// un dispatch tiene una llave type
const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch({ type: 'LOGIN', datos })
  },
});
// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
