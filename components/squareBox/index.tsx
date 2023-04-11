import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { XSkin, Oskin } from '../../assets/images'

interface ISquareBoxProps {
  value: string | null
  onClickFn: () => void
}

const SquareBox = (props: ISquareBoxProps) => {
  return (
    <TouchableOpacity onPress={props.onClickFn} style={styles.container}>
      {props.value === null ? null : props.value === 'X' ? <XSkin /> : <Oskin />}
    </TouchableOpacity>
  )
}

export default SquareBox
