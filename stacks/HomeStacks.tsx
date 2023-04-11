import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SinglePlayer from '../screens/SinglePlayer'
import TwoPlayers from '../screens/TwoPlayers'
import HomeTab from '../tabs/HomeTab'

export type IHomeStackProps = {
  HomeTab: undefined
  Single: undefined
  Two: undefined
}

const Stack = createNativeStackNavigator<IHomeStackProps>()

const HomeStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeTab' component={HomeTab} options={{ headerShown: false }} />
      <Stack.Screen name='Single' component={SinglePlayer} options={{ headerShown: false }} />
      <Stack.Screen name='Two' component={TwoPlayers} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeStacks
