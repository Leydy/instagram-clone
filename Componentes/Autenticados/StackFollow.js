import { StackNavigator } from 'react-navigation';
import { TabFollow } from './TabFollow';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackFollow = StackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null,
    },
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,
  },
});
export { StackFollow };
