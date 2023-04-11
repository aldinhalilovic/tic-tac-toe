import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Score = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>0</Text>
      <Text style={[styles.text, { textDecorationLine: 'none' }]}>:</Text>
      <Text style={styles.text}>0</Text>
    </View>
  )
}

export default Score
