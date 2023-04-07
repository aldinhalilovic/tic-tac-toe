import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from './screens/Intro'
import HomeTab from './tabs/HomeTab'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Intro'
          component={Intro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='HomeTab'
          component={HomeTab}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
