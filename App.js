import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram-clone' };
  }

  render() {
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
