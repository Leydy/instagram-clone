// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
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
          <Text style={styles.txtHeader}>{autor.nombre}</Text>
        </View>
        <Image source={{ uri: item.secure_url }} style={{ width, height }} />
        <View style={styles.footer}>
          <View />

          <View style={styles.vieww}>
            <Image
              style={styles.icons1}
              source={require('../../assets/hc.png')}
            />
            <Image
              style={styles.icons2}
              source={require('../../assets/hn.png')}
            />
          </View>

          <View style={styles.texto}>
            <Text style={styles.autor}>{autor.nombre}</Text>
            <Text style={styles.itemStyle}>{item.texto}</Text>

          </View>
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
  txtHeader: {
    fontStyle: 'normal',
    paddingVertical: 18,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  footer: {
    marginHorizontal: 12,
  },
  vieww: {
    flexDirection: 'row',

  },
  icons1: {
    width: 60,
    height: 60,


  },
  icons2: {
    width: 30,
    height: 30,
    marginVertical: 15,

  },
  texto: {
    marginBottom: 16,
    flexDirection: 'row',


  },
  autor: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  itemStyle: {
    fontStyle: 'italic',
  },
});

// make this component available to the app
export default Publicacion;
