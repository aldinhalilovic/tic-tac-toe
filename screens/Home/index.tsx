import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeProps } from '../../models'
import GameOption from '../../components/gameoption'
import MainView from '../../components/MainView'
import Planet from '../../assets/images/planet.svg'
import Robot from '../../assets/images/robot.svg'
import Play from '../../assets/images/play.svg'
import Store from '../../assets/images/store.svg'
import Thrumpet from '../../assets/images/thrumpet.svg'
import Joystick from '../../assets/images/joystick.svg'
import styles from './style'

export default function Home({ navigation }: HomeProps) {
  return (
    <MainView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.title}>Select Game</Text>
            <View style={styles.line}></View>
          </View>
          <Planet />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <GameOption
            title='Single Player'
            image={Robot}
            circleBackgroundColor='#FFA800'
            titleBackgroundColor='#F3501D'
            onPress={() => navigation.navigate('Single')}
          />
          <GameOption
            title='Two Players'
            image={Play}
            circleBackgroundColor='#EB00FF'
            titleBackgroundColor='transparent'
            onPress={() => navigation.navigate('MultiPlayer')}
          />
          <GameOption
            title='Market Place'
            image={Store}
            circleBackgroundColor='#391898'
            titleBackgroundColor='#451CBB'
          />
          <GameOption
            title='Challenges'
            image={Thrumpet}
            circleBackgroundColor='#4C9BD4'
            titleBackgroundColor='#33A6BF'
          />
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <Joystick />
        </View>
      </SafeAreaView>
    </MainView>
  )
}
