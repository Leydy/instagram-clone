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
export const actionCargarImagenSignUp = imagen => ({
  type: constantes.CARGAR_IMAGEN_SIGNUP,
  imagen,
});
export const actionLimpiarImagenSignUp = () => ({
  type: constantes.LIMPIAR_IMAGEN_SIGNUP,
});
export const actionCargarImagenPublicacion = imagen => ({
  type: constantes.CARGAR_IMAGEN_PUBLICACION,
  imagen,
});
export const actionLimpiarImagenPublicacion = () => ({
  type: constantes.LIMPIAR_IMAGEN_PUBLICACION,
});
export const actionSubirPublicacion = values => ({
  type: constantes.SUBIR_PUBLICACION,
  values,
});
export const actionDescargarPublicaciones = () => ({
  type: constantes.DESCARGAR_PUBLICACIONES,
})
export const actionAgregarPublicacionesStore = publicaciones => ({
  type: constantes.AGREGAR_PUBLICACIONES_STORE,
  publicaciones,
})
export const actionAgregarAutoresStore = autores => ({
  type: constantes.AGREGAR_AUTORES_STORE,
  autores,
})
