import React from 'react'
import { View, Text } from 'react-native'
import { PlayerOptionType } from '../../models'
import styles from './style'
import Xskin from '../../assets/images/Xskin2.svg'
import Oskin from '../../assets/images/Oskin2.svg'

const PlayerOption = (props: PlayerOptionType) => {
  return (
    <View
      style={[
        styles.container,
        props.activePlayer === props.option && { borderWidth: 3, borderColor: 'white' },
      ]}
    >
      <Text style={styles.title}>{props.title}</Text>
      {props.option === 'X' ? <Xskin /> : <Oskin />}
    </View>
  )
}

export default PlayerOption
