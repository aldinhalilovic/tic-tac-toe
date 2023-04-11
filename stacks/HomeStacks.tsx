import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTab from '../tabs/HomeTab'
import MultiPlayer from '../screens/MultiPlayer'
import SinglePlayer from '../screens/SinglePlayer'
import { HomeStackProps } from '../models'

const Stack = createNativeStackNavigator<HomeStackProps>()

const HomeStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeTab' component={HomeTab} options={{ headerShown: false }} />
      <Stack.Screen name='Single' component={SinglePlayer} options={{ headerShown: false }} />
      <Stack.Screen name='MultiPlayer' component={MultiPlayer} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeStacks
