// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';

// create a component
class Publicacion extends Component {
  render() {
    console.log(this.props.autor);
    const { navigation, item, autor } = this.props;
    const { width } = Dimensions.get('window');
    console.log(width);
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{ uri: autor.fotoURL }}
            style={{ width: 48, height: 48, borderRadius: 24 }}
          />
          <Text>{autor.nombre}</Text>
        </View>
        <Image source={{ uri: item.secure_url }} style={{ width, height }} />
        <View>
          <Text>Likes</Text>
          <Text>Comentarios</Text>
        </View>

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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

// make this component available to the app
export default Publicacion;
