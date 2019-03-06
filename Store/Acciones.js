import constantes from './Constantes';

export const actionRegistro = values => ({
  type: constantes.REGISTRO,
  datos: values,
});

export const actionLogin = datos => ({
  type: constantes.LOGIN,
  datos,
});
