
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Random from './Random'
import Details1 from './Details1';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Details1"
            component={Details1}
            />
          <Stack.Screen
            name="Random"
            component={Random}
            />
        </Stack.Navigator>
      </NavigationContainer>
   
  )
}