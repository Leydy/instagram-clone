// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';// permite adornar el componente e integrarle la store y el dispatch

// create a component
class SignUp extends Component {
  render() {
    console.log(this.props.numero);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
        <Button
          title="Aumentar"
          onPress={this.props.aumentar}
        />
        <Button
          title="SignIn"
          onPress={() => {
            navigation.goBack();
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
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
// Pasa el state "reducerPrueba"
const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});
// un dispatch tiene una llave type
const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
