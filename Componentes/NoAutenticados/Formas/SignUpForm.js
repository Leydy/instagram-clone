import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
  console.log(props);
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
        autoCapitalize="none"
        underlineColorAndroid="#ffccff"
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
        onBlur={props.input.onBlur}
      />
      {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>

  );
}

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'Campo requerido'
  } else if (values.nombre.length < 5) {
    errors.nombre = 'Deben ser al menos 5 caracteres'
  } else if (values.nombre.length > 10) {
    errors.nombre = 'Debe ser menor de 10 caracteres'
  }
  if (!values.correo) {
    errors.correo = 'Campo requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Correo inválido'
  }
  if (!values.password) {
    errors.password = 'Correo Requerido'
  } else if (values.password.length < 5) {
    errors.nombre = 'Deben ser al menos 5 caracteres'
  } else if (values.password.length > 15) {
    errors.nombre = 'Debe ser menor de 15 caracteres'
  }
  if (!values.confirmacion) {
    errors.confirmacion = 'Campo requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'El password debe coincidir'
  }
  return errors;
}
const SignUpForm = (props) => {
  console.log(props);
  return (

    <View>
      <Field name="nombre" component={fieldNombre} ph="nombre" />
      <Field name="correo" component={fieldNombre} ph="correo@correo.com" />
      <Field name="password" component={fieldNombre} ph="*****" />
      <Field name="confirmacion" component={fieldNombre} ph="*****" />
      <Button
        title="Registrar"
        onPress={props.handleSubmit((values) => {
          console.log(values);
        })}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  errors: {
    color: '#FF0000'
  },

  // linea: {
  //   backgroundColor: '#DCDCDC',
  //   height: 2,
  // },
});
export default reduxForm({ form: 'SignUpForm', validate, })(SignUpForm);
