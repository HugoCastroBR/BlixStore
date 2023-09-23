
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';

import HomeScreen from '../components/pages/home';
import RegisterScreen from '../components/pages/register';
import FeedScreen from '../components/pages/feed';
import CheckoutScreen from '../components/pages/checkout';

const Routes = () =>{
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Checkout"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;