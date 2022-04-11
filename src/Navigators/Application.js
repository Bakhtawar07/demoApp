import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ShutterScreen from '../Containers/Screens/ShutterScreen'
import LoginScreen from '../Containers/Screens/LoginScreen'
import RegisterScreen from '../Containers/Screens/RegisterScreen'
import DrawerNavigatorRoutes from '../Containers/Screens/DrawerNavigatorRoutes'
import { useDispatch } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'


const Stack = createStackNavigator()

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    appStartup()
  }, [])

  function appStartup() {
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())
    dispatch(InitStartup.action())



  }
  const Auth = () => {
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#307ecc',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShutterScreen">
        <Stack.Screen
          name="ShutterScreen"
          component={ShutterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigatorRoutes"
          component={DrawerNavigatorRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
