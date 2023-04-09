import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Intro from './screens/Intro'
import HomeTab from './tabs/HomeTab'

export type StackProps = {
  Intro: undefined
  HomeTab: undefined
}

const Stack = createNativeStackNavigator<StackProps>()

const Entry = () => {
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

export default Entry
