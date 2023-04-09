import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const MainView = ({ children }: { children: JSX.Element }) => {
  return (
    <LinearGradient style={styles.container} colors={['#5D5FEF', '#843CE0']}>
      {children}
    </LinearGradient>
  )
}

export default MainView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
