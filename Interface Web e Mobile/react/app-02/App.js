import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './src/screens/index';
import Perfil from './src/screens/perfil';
import Estado from './src/screens/estado';
import Areas from './src/areas/areas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name='Index' component={Index} />
        <Stack.Screen name='Perfil' component={Perfil} />
        <Stack.Screen name='Estado' component={Estado} />
        <Stack.Screen name='Areas' component={Areas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
