import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';


const fieldTexto = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType="default"
      autoCapitalize="none"
      onBlur={props.input.onBlur}
    />
    {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>

);
const fieldImagen = props => (
  <View>
    <View>
      {props.meta.touched
      && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  </View>
)


const validate = (values, props) => {
  console.log('ejecutando validacion');
  const errors = {};
  if (!props.imagen) {
    errors.imagen = 'Imagen es requerida'
  }
  if (values.texto && !values.texto.length > 140) {
    errors.nombre = 'Debe ser menor de 10 caracteres'
  }

  return errors;
}
const SeleccionarGaleriaForm = props => (

  <View style={styles.container}>

    <Field name="imagen" component={fieldImagen} />

    <View style={styles.textAreaContainer}>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        name="texto"
        component={fieldTexto}
        underlineColorAndroid="transparent"
        ph="Texto de la imagen"
      />
    </View>
    <Button
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />
  </View>
);
// {
// console.log(values);
// autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//   // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//   // ...
//   });
// }


const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  textInput: {
    marginBottom: 16,
    borderWidth: 1,
  },
  errors: {
    color: '#FF0000'
  },
  textAreaContainer: {
    borderColor: '#FF0000',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 100,
    width: 150,
    // justifyContent: 'flex-start'
  },

  // linea: {
  //   backgroundColor: '#DCDCDC',
  //   height: 2,
  // },
});
export default reduxForm({ form: 'SeleccionarGaleriaForm', validate, })(SeleccionarGaleriaForm);
