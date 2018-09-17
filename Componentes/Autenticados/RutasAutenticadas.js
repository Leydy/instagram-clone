import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackFollow } from './StackFollow';
import Add from './Add';
import Profile from './Profile';

const RutasAutenticadas = TabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: StackFollow,
  },
  Profile: {
    screen: Profile,
  },
},
{
  tabBarPosition: 'bottom',
});
export { RutasAutenticadas };
