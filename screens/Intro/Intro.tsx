import React from 'react'
import { StackProps } from '../../App'
import { SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native'
import { Logo, Star, Rocket, Nlo } from '../../assets/images'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MainView from '../../components/MainView'
import styles from './style'

interface IntroProps {
  navigation: NativeStackNavigationProp<StackProps, 'Intro'>
}

const Intro = ({ navigation }: IntroProps) => {
  return (
    <MainView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.logo}>
            <Image source={Logo} />
          </View>
          <View style={styles.stars}>
            <Image source={Star} style={styles.star} />
            <Image source={Star} style={styles.star} />
            <Image source={Star} style={styles.star} />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeStacks')}>
            <Text style={styles.buttonText}>Let&apos;s play</Text>
          </TouchableOpacity>
          <Image source={Nlo} style={{ alignSelf: 'flex-end' }} />
          <Image source={Rocket} style={{ alignSelf: 'flex-start' }} />
        </SafeAreaView>
      </View>
    </MainView>
  )
}

export default Intro
