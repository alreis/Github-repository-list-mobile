import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#711',
        },
      },
    },
  ),
);

export default Routes;
