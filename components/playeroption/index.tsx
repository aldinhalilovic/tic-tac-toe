import React from 'react'
import { View, Text } from 'react-native'
import { PlayerOptionType } from '../../models'
import styles from './style'

const PlayerOption = (props: PlayerOptionType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <props.image style={styles.image} />
    </View>
  )
}

export default PlayerOption
