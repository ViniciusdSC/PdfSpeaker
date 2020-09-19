import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '~/pages/Home';
import Media from '~/pages/Media';

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Media" component={Media} />
    </Stack.Navigator>
  );
}

export default Routes;
