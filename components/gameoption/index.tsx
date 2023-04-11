import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import { GameOptionProps } from '../../models'

const GameOption = (props: GameOptionProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={[styles.circle, { backgroundColor: props.circleBackgroundColor }]}>
          <props.image />
        </View>
        <View
          style={[
            styles.title,
            {
              borderColor: props.circleBackgroundColor,
              backgroundColor: props.titleBackgroundColor,
            },
          ]}
        >
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default GameOption
