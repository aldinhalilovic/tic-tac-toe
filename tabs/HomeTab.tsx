import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { Entypo, FontAwesome } from '@expo/vector-icons'

type ITabProps = {
  Home: undefined
  Profile: undefined
}
const Tab = createBottomTabNavigator<ITabProps>()

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#843CE0', borderTopWidth: 0, borderTopColor: 'b' },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <Entypo name='home' size={focused ? 24 : 20} color={color} />
          },
          tabBarLabel: ({ color }) => {
            return <Text style={{ color }}>Home</Text>
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesome name='user' size={focused ? 24 : 20} color={color} />
          },
          tabBarLabel: ({ color }) => {
            return <Text style={{ color }}>Profile</Text>
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTab
