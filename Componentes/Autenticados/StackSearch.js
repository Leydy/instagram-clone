import { StackNavigator } from 'react-navigation';
import Publicacion from './Publicacion';
import Search from './Search';
import Autor from './Profile';
import Comentarios from './Comentarios';

const StackSearch = StackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Autor: {
    screen: Autor,
  },
  Comentarios: {
    screen: Comentarios,
  },
});
export { StackSearch };
