import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';

// combineReducers
const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};


const miMiddleware = store => next => (action) => {
  console.log('Se ejecuta el middleware');
  next(action);
};

const ultimoMiddleware = store => next => (action) => {
  console.log('ultimo middleware');
  next(action);
}
const reducers = combineReducers({
  // reducerPrueba: reducerPrueba,
  reducerPrueba,
  form,
});
const store = createStore(reducers, applyMiddleware(miMiddleware, ultimoMiddleware));
export default store;
