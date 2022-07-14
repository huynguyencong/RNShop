import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthContext } from './src/context/AuthContext';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} ></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileScreen} ></Tab.Screen>
      </Tab.Navigator>
    )
  }

const AppNavigator = () => {
    const { token } = useContext(AuthContext)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Tab' component={TabNavigator} options={{headerShown: false}} />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name='Auth' component={AuthScreen} />
                    <Stack.Screen name='SignIn' component={SignInScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator