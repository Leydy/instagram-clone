import constantes from './Constantes';

export const actionRegistro = values => ({
  type: constantes.REGISTRO,
  datos: values,
});

export const actionLogin = datos => ({
  type: constantes.LOGIN,
  datos,
});
export const actionEstablecerSesion = usuario => ({
  type: constantes.ESTABLECER_SESION,
  usuario,
});

export const actionCerrarSesion = () => ({
  type: constantes.CERRAR_SESION,
});
