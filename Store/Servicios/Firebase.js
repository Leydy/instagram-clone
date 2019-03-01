import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCW076flkUwcx8H5wRQn_70nuQAFGjGwfs',
  authDomain: 'instagram-clone-5cdce.firebaseapp.com',
  databaseURL: 'https://instagram-clone-5cdce.firebaseio.com',
  projectId: 'instagram-clone-5cdce',
  storageBucket: 'instagram-clone-5cdce.appspot.com',
  messagingSenderId: '1045051163801'
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();
export const baseDeDatos = firebase.database();
