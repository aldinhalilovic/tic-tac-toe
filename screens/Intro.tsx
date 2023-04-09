import React from 'react'
import { StackProps } from '../App'
import { SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { Logo, Star, Rocket, Nlo } from '../assets/images'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MainView from '../components/MainView'

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

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeTab')}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 70,
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    gap: 50,
    marginBottom: 20,
  },
  star: {
    width: 60,
    height: 60,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 22,
    height: '9.7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#843CE0',
    fontWeight: '600',
    fontSize: 30,
    letterSpacing: 1.3,
  },
})
