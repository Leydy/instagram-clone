// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import { actionCargarImagenPublicacion } from '../../Store/Acciones';
import SeleccionarImagen from '../SeleccionarImagen';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

// create a component
class SeleccionarGaleria extends Component {
    static navigationOptions={
      tabBarVisible: false,
    };

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.imagen}>
            <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius />
          </View>
          <View style={styles.texto}>
            <SeleccionarGaleriaForm imagen={this.props.imagen.imagen} registro={(values) => { console.log(values); }} />
          </View>
        </View>
      );
    }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffccff',
  },
  imagen: {
    flex: 2
  },
  texto: {
    flex: 2
  }
});

// make this component available to the app
const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion,
});


const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagenPublicacion(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
