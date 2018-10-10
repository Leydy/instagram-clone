import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = () => <TextInput placeholder="Texto desde field nombre" />;

const SignUpForm = () => (
  <View>
    <Field name="nombre" component={fieldNombre} />
    <Text>Redux Form</Text>
  </View>
);


export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
