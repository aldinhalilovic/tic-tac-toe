import React from 'react'
import * as reactNative from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Logo, Star, Rocket, Nlo } from '../assets/images'

const Intro = ({ navigation }: { navigation: any }) => {
  return (
    <LinearGradient style={styles.container} colors={['#5D5FEF', '#843CE0']}>
      <reactNative.SafeAreaView>
        <reactNative.View style={styles.logo}>
          <reactNative.Image source={Logo} />
        </reactNative.View>
        <reactNative.View style={styles.stars}>
          <reactNative.Image source={Star} style={styles.star} />
          <reactNative.Image source={Star} style={styles.star} />
          <reactNative.Image source={Star} style={styles.star} />
        </reactNative.View>

        <reactNative.TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home', {})}
        >
          <reactNative.Text style={styles.buttonText}>Let s play</reactNative.Text>
        </reactNative.TouchableOpacity>
        <reactNative.Image source={Nlo} style={{ alignSelf: 'flex-end' }} />
        <reactNative.Image source={Rocket} style={{ alignSelf: 'flex-start' }} />
      </reactNative.SafeAreaView>
    </LinearGradient>
  )
}

export default Intro

const styles = reactNative.StyleSheet.create({
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
