// import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';// permite adornar el componente e integrarle la store y el dispatch
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro, actionCargarImagen, actionCargarImagenSignUp, actionLimpiarImagenSignUp } from '../../Store/Acciones';
import SeleccionarImagen from '../SeleccionarImagen';
import constantes from '../../Store/Constantes';

// create a component
class SignUp extends Component {
  componentWillUnmount() {
    this.props.limpiarImagen();
  }

  registroDeUsuario =(values) => {
    console.log(values);
    this.props.registro(values);
  };

  render() {
    console.log(this.props.numero);


    const { navigation } = this.props;
    return (

      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
        <SignUpForm registro={this.registroDeUsuario} />
        <Button
          title="SignIn"
          onPress={() => {
            navigation.goBack();
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
    backgroundColor: '#fff',
    paddingHorizontal: 16,

  },

});
// Pasa el state "reducerPrueba"
const mapStateToProps = state => ({
  numero: state.reducerPrueba,
  imagen: state.reducerImagenSignUp,
});
// un dispatch tiene una llave type
const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(actionRegistro(values));
  },
  cargarImagen: (imagen) => {
    // dispatch({ type: constantes.CARGAR_IMAGEN_SIGNUP, imagen: imagen });
    dispatch(actionCargarImagenSignUp(imagen));
  },
  limpiarImagen: () => {
    // dispatch({ type: constantes.LIMPIAR_IMAGEN_SIGNUP });
    dispatch(actionLimpiarImagenSignUp());
  },
});

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
