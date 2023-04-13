import { View } from 'react-native'
import React from 'react'
import PlayerOption from '../playeroption'
import Score from '../score'

import styles from './styles'

type HeaderProps = {
  player1Score: number
  player2Score: number
  player1: string
  player2: string
  activePlayer: string
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.header}>
      <PlayerOption option='X' title={props.player1} activePlayer={props.activePlayer} />
      <Score player1={props.player1Score} player2={props.player2Score} />
      <PlayerOption option='O' title={props.player2} activePlayer={props.activePlayer} />
    </View>
  )
}

export default Header
