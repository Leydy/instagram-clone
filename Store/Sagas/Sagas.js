import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion } from '../Servicios/Firebase';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

function* generadoraRegistro(values) {
  yield call(registroEnFirebase, values.datos);
  console.log(values);
}
export default function* funcionPrimaria() {
  yield takeEvery('REGISTRO', generadoraRegistro)
  console.log('Desde nuestra función generadora');
}
