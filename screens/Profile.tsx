import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MainView from '../components/MainView'

const Profile = () => {
  return (
    <MainView>
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
      </View>
    </MainView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
})
