import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { ModalProps } from '../../models'
import Trophy from '../../assets/images/trophy.svg'
import Draw from '../../assets/images/draw.svg'
import styles from './style'

const ModalTab = (props: ModalProps) => {
  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={props.show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, props.winner === null && { color: 'white' }]}>
              {props.winner === null ? 'It is a draw' : `${props.winner} won!`}
            </Text>
            {props.winner === null ? (
              <View style={styles.drawView}>
                <Draw />
              </View>
            ) : (
              <Trophy />
            )}

            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, props.winner === null && { backgroundColor: '#4C8BD4' }]}
                onPress={props.onGoBack}
              >
                <Text style={{ color: 'white', fontWeight: '500' }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, props.winner === null && { backgroundColor: '#4C8BD4' }]}
                onPress={props.onClose}
              >
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
