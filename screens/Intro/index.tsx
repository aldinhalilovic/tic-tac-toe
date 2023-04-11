import React from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native'
import MainView from '../../components/MainView'
import { Logo } from '../../assets/images'
import Star from '../../assets/images/star.svg'
import Nlo from '../../assets/images/nlo.svg'
import Rocket from '../../assets/images/rocket.svg'
import styles from './style'
import { IntroProps } from '../../models'

const Intro = ({ navigation }: IntroProps) => {
  return (
    <MainView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.logo}>
            <Image source={Logo} />
          </View>
          <View style={styles.stars}>
            <Star style={styles.star} />
            <Star style={styles.star} />
            <Star style={styles.star} />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeStacks')}>
            <Text style={styles.buttonText}>Let&apos;s play</Text>
          </TouchableOpacity>
          <Nlo style={{ alignSelf: 'flex-end' }} />
          <Rocket style={{ alignSelf: 'flex-start' }} />
        </SafeAreaView>
      </View>
    </MainView>
  )
}

export default Intro
