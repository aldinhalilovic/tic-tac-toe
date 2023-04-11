import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from './screens/Intro/Intro'
import HomeStacks from './stacks/HomeStacks'

export type StackProps = {
  Intro: undefined
  HomeStacks: undefined
}

const Stack = createNativeStackNavigator<StackProps>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeStacks'>
        <Stack.Screen
          name='Intro'
          component={Intro}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='HomeStacks'
          component={HomeStacks}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
