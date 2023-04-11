import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { ScoreType } from '../../models'

const Score = (props: ScoreType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.player1}</Text>
      <Text style={[styles.text, { textDecorationLine: 'none' }]}>:</Text>
      <Text style={styles.text}>{props.player2}</Text>
    </View>
  )
}

export default Score
