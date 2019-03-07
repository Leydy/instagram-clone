import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import constantes from './Constantes';

// combineReducers
const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSesion = (state = null, action) => {
  switch (action.type) {
    case constantes.ESTABLECER_SESION:
      return action.usuario;
    case constantes.CERRAR_SESION:
      return null;
    default:
      return state;
  }
}
const reducerImagenSignUp = (state = { imagen: null }, action) => {
  switch (action.type) {
    case constantes.CARGAR_IMAGEN_SIGNUP:
      return { imagen: action.imagen };
    case constantes.LIMPIAR_IMAGEN_SIGNUP:
      return { imagen: null };
    default:
      return state;
  }
};
const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  // reducerPrueba: reducerPrueba,
  reducerImagenSignUp,
  reducerSesion,
  reducerPrueba,
  form,
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);
export default store;
