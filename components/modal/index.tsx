import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Trophy from '../../assets/images/trophy.svg'
import styles from './style'
import { ModalProps } from '../../models'

const ModalTab = (props: ModalProps) => {
  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={props.show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Player {props.winner} Won</Text>
            <Trophy />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={props.onGoBack}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={props.onClose}>
                <Text style={styles.buttonText}>Play Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalTab
