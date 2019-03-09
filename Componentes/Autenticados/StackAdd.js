import { StackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';

const StackAdd = StackNavigator({
  Home: {
    screen: Add,

  },
  Seleccion: {
    screen: SeleccionarGaleria,
  }

});
export { StackAdd };
