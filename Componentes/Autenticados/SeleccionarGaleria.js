// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import { actionCargarImagenPublicacion, actionSubirPublicacion, actionLimpiarImagenPublicacion } from '../../Store/Acciones';
import SeleccionarImagen from '../SeleccionarImagen';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

// create a component
class SeleccionarGaleria extends Component {
    static navigationOptions={
      tabBarVisible: false,
    };

    componentWillUnmount() {
      this.props.limpiarImagen();
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.estadoSubirPublicacion !== nextProps.estadoSubirPublicacion) {
        switch (nextProps.estadoSubirPublicacion) {
          case 'EXITO':
            console.log('exito');
            this.props.navigation.goBack();
            break;
          case 'ERROR':
            console.log('error');
            break;
          default:
            break;
        }
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.imagen}>
            <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius />
          </View>
          <View style={styles.texto}>
            <SeleccionarGaleriaForm
              imagen={this.props.imagen.imagen}
              registro={(values) => {
                this.props.subirPublicacion(values);
                console.log(values);
              }}
            />
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
  estadoSubirPublicacion: state.reducerExitoSubirPublicacion.estado,
});


const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagenPublicacion(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
  limpiarImagen: () => {
    dispatch(actionLimpiarImagenPublicacion());
  },
  subirPublicacion: (values) => {
    dispatch(actionSubirPublicacion(values));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
