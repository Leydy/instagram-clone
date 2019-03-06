// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { autenticacion } from '../../Store/Servicios/Firebase';

// create a component
class Profile extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          title="Publicacion"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />
        <Button
          title="Salir"
          onPress={() => {
            autenticacion.signOut();
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

// make this component available to the app
export default Profile;
