import { TabNavigator } from 'react-navigation';
import Follow from './Follow';

const TabFollow = TabNavigator({
  Follow: {
    screen: Follow,
  },
  Followers: {
    screen: Follow,
  },
},

{
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
      backgroundColor: '#FA58F4',
    },
  },
});
export { TabFollow };
