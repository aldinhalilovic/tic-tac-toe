import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Joystick, Planet, Play, Robot, Store, Thrumpet } from '../../assets/images'
import GameOption from '../../components/gameoption/GameOption'
import MainView from '../../components/MainView'
import { IHomeStackProps } from '../../stacks/HomeStacks'
import styles from './style'

type IHomeProps = {
  navigation: NativeStackNavigationProp<IHomeStackProps, 'HomeTab'>
}

export default function Home({ navigation }: IHomeProps) {
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
            onPress={() => navigation.navigate('Single')}
          />
          <GameOption
            title='Two Players'
            image={Play}
            circleBackgroundColor='#EB00FF'
            titleBackgroundColor='transparent'
            onPress={() => navigation.navigate('Two')}
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
          <Image source={Joystick} />
        </View>
      </SafeAreaView>
    </MainView>
  )
}
