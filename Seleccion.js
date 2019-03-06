import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './Store/Servicios/Firebase';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/Acciones';


class Seleccion extends Component {
  componentDidMount() {
    this.props.autenticacion();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

const mapStateToProps = state => ({
  usuario: state.reducerSesion,
});
const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        console.log(usuario);
        dispatch(actionEstablecerSesion(usuario));
      } else {
        console.log('No existe la sesión');
        dispatch(actionCerrarSesion());
      }
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
