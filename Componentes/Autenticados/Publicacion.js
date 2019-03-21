// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';

// create a component
class Publicacion extends Component {
  render() {
    const { navigation, item } = this.props;
    const { width } = Dimensions.get('window');
    console.log(width);
    const factor = item.width / width;
    const height = item.height / factor;
    return (
      <View>
        <View>
          <Text>{item.uid}</Text>
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
});

// make this component available to the app
export default Publicacion;
