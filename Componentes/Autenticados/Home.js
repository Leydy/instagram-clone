// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/Acciones';

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
        <Text>Miau</Text>
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
