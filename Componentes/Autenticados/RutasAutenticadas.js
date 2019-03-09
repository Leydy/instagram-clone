import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackFollow } from './StackFollow';
import Profile from './Profile';
import { StackAdd } from './StackAdd';

const RutasAutenticadas = TabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: StackAdd,
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
