// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, FlatList, Image, Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/Acciones';
import Publicacion from './Publicacion';

// create a component
class Home extends Component {
  componentDidMount() {
    this.props.descargarPublicaciones();
  }

  render() {
    console.log(this.props.publicaciones);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.publicaciones}
          renderItem={({ item }) => <Publicacion item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separador} />}

        />
        {/* <Text>Miau</Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
        <Button
          title="Comentarios"
          onPress={() => {
            navigation.navigate('Comentarios');
          }}
        /> */}
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
  separador: {
    borderWidth: 1,
    borderColor: '#ffccff',
  },
});
const mapStateToProps = state => ({
  publicaciones: state.reducerPublicacionesDescargadas,
});

const mapDispatchToProps = dispatch => ({
  descargarPublicaciones: () => {
    dispatch(actionDescargarPublicaciones());
  },
});
// make this component available to the app

export default connect(mapStateToProps, mapDispatchToProps)(Home);
