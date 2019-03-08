import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import constantes from '../Constantes';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre, email,
});
const registroFotoCloudinary = ({ imagen }) => {
  console.log(imagen);
  const { uri, type } = imagen;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const foto = {
    uri,
    type,
    name
  }
  // const formImagen = new FormData();
  // formImagen.append('upload_preset', constantes.CLOUDINARY_PRESET);
  // formImagen.append('file', foto);
  // return fetch(constantes.CLOUDINARY_NAME, {
  //   method: 'POST',
  //   body:
  // })
}
function* sagaRegistro(values) {
  try {
    // cargar foto
    const imagen = yield select(state => state.reducerImagenSignUp);
    console.log(imagen);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    // const registro = yield call(registroEnFirebase, values.datos);
    // const { email, uid } = registro;
    // const { datos: { nombre } } = values;
    // yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFirebase = ({ correo, password }) => autenticacion.signInWithEmailAndPassword(correo, password)
  // Handle Errors here.
  .then(success => success.user.toJSON());

function* sagaLogin(values) {
  try {
    console.log(values);
    const resultado = yield call(loginEnFirebase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}


export default function* funcionPrimaria() {
  yield takeEvery(constantes.REGISTRO, sagaRegistro)
  yield takeEvery(constantes.LOGIN, sagaLogin)
  console.log('Desde nuestra función generadora');
}
