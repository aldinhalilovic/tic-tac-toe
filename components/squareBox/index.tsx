import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Xskin from '../../assets/images/Xskin2.svg'
import Oskin from '../../assets/images/Oskin2.svg'
import { SquareBoxProps } from '../../models'

const SquareBox = (props: SquareBoxProps) => {
  return (
    <TouchableOpacity onPress={props.onClickFn} style={styles.container}>
      {props.value === null ? null : props.value === 'X' ? <Xskin /> : <Oskin />}
    </TouchableOpacity>
  )
}

export default SquareBox
