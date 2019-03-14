import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import constantes from '../Constantes';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({ uid, email, nombre, fotoURL }) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre, email, fotoURL,
});
const registroFotoCloudinary = ({ imagen }) => {
  console.log(imagen);
  const { uri, type } = imagen;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const foto = {
    uri,
    type: 'image/jpeg',
    name,
  };
  const formImagen = new FormData();
  formImagen.append('upload_preset', constantes.CLOUDINARY_PRESET);
  formImagen.append('file', foto);

  return fetch(constantes.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImagen,
  }).then(response => response.json());
};
function* sagaRegistro(values) {
  try {
    // cargar foto
    const imagen = yield select(state => state.reducerImagenSignUp);
    console.log(imagen);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    console.log(urlFoto);
    console.log(urlFoto.secure_url);
    const fotoURL = urlFoto.secure_url;
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, { uid, email, nombre, fotoURL });
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
const escribirFirebase = ({ width, height, secure_url }, texto = '') => baseDeDatos.ref('publicaciones/').push({
  width, height, secure_url, texto,
}).then(response => response);
function* sagaSubirPublicacion({ values }) {
  try {
    const imagen = yield select(state => state.reducerImagenPublicacion);
    // console.log(imagen);
    const resultadoImagen = yield call(registroFotoCloudinary, imagen);
    console.log(resultadoImagen);
    const { width, height, secure_url } = resultadoImagen;
    const parametrosImagen = { width, height, secure_url };
    const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, values.texto);
    console.log(escribirEnFirebase);
    console.log(values);
    console.log(values.texto);
  } catch (error) {
    console.log(error);
  }
}


export default function* funcionPrimaria() {
  yield takeEvery(constantes.REGISTRO, sagaRegistro)
  yield takeEvery(constantes.LOGIN, sagaLogin)
  yield takeEvery(constantes.SUBIR_PUBLICACION, sagaSubirPublicacion)
  console.log('Desde nuestra función generadora');
}
