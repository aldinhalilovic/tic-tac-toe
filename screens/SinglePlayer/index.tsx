import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import MainView from '../../components/MainView'

const SinglePlayer = () => {
  return (
    <MainView>
      <View style={styles.container}>
        <Text>SinglePlayer</Text>
      </View>
    </MainView>
  )
}

export default SinglePlayer
