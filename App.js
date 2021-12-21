import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import SplashScreen from './components/SplashScreen';
import Search from './components/Search';
import Detail from './components/Detail';
import store from './store';
import {Provider} from 'react-redux';
const App = () => {
  const Stack = createNativeStackNavigator();
  return  (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
      <Stack.Screen name="Splash" component={SplashScreen}  options={{headerShown: false}} />
      <Stack.Screen name="Search" component={Search}  options={{headerShown: false}} />
      <Stack.Screen name="Detail" component={Detail}  options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
  }
export default App;