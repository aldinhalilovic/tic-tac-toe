import React, { useState } from 'react'
import styles from './styles'
import MainView from '../../components/MainView'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header'
import InputModal from '../../components/inputModal/InputModal'

// type SinglePlayerProps = {
//   navigation: NativeStackNavigationProp<HomeStackProps, 'Single'>
// }

const SinglePlayer = () => {
  const [player1Score, setPlayer1Score] = useState<number>(0)
  const [player2Score, setPlayer2Score] = useState<number>(0)

  return (
    <MainView>
      <SafeAreaView style={styles.container}>
        {/* <Header player1Score={player1Score} player2Score={player2Score} player2='Computer' /> */}
        <InputModal />
      </SafeAreaView>
    </MainView>
  )
}

export default SinglePlayer
