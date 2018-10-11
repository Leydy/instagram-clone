import { createStore, combineReducers } from 'redux';
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
const reducers = combineReducers({
  // reducerPrueba: reducerPrueba,
  reducerPrueba,
  form,
});
const store = createStore(reducers);
export default store;
