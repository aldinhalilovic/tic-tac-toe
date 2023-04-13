import React, { useState } from 'react'
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

type InputModalProps = {
  value: string
  changeValue: (value: string) => void
  visible: boolean
  closeModal: () => void
  label?: string
}

const InputModal = (props: InputModalProps) => {
  const [localValue, setLocalValue] = useState<string>(props.value)

  const onSubmit = () => {
    props.changeValue(localValue)
    props.closeModal()
  }

  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>{props?.label || 'Enter your name!'}</Text>
            <TextInput style={styles.input} value={localValue} onChangeText={setLocalValue} />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default InputModal
