import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Joystick, Planet, Play, Robot, Store, Thrumpet } from '../assets/images'
import GameOption from '../components/GameOption'
import MainView from '../components/MainView'

export default function Home() {
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
          <Image source={Planet} />
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <GameOption
            title='Single Player'
            image={Robot}
            circleBackgroundColor='#FFA800'
            titleBackgroundColor='#F3501D'
          />
          <GameOption
            title='Two Players'
            image={Play}
            circleBackgroundColor='#EB00FF'
            titleBackgroundColor='transparent'
          />
          <GameOption
            title='Market Place '
            image={Store}
            circleBackgroundColor='#391898'
            titleBackgroundColor='#451CBB'
          />
          <GameOption
            title='Market Place '
            image={Thrumpet}
            circleBackgroundColor='#4C9BD4'
            titleBackgroundColor='#33A6BF'
          />
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <Image source={Joystick} />
        </View>
      </SafeAreaView>
    </MainView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 36,
    color: 'white',
    lineHeight: 42,
  },
  line: {
    width: '80%',
    height: 3,
    borderRadius: 50,
    backgroundColor: '#FFA800',
    alignSelf: 'flex-start',
  },
})
