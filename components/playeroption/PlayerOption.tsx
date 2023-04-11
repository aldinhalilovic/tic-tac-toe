import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import styles from './style'

type PlayerOptionType = {
  image: ImageSourcePropType
  title: string
}

const PlayerOption = (props: PlayerOptionType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={props.image} style={styles.image} />
    </View>
  )
}

export default PlayerOption
