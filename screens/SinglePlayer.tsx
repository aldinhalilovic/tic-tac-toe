import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ooption, Xoption } from '../assets/images'

import MainView from '../components/MainView'
import PlayerOption from '../components/playeroption/PlayerOption'
import Score from '../components/score/Score'

const SinglePlayer = () => {
  return (
    <MainView>
      <SafeAreaView>
        <View style={styles.header}>
          <PlayerOption image={Xoption} title='Player one' />
          <Score />
          <PlayerOption image={Ooption} title='Player two' />
        </View>
        <View
          style={{
            height: '60%',
            backgroundColor: '#391898',
            width: '80%',
            alignSelf: 'center',
            top: '25%',
            borderRadius: 20,
            // flexDirection: 'row',
            // justifyContent: 'space-around',
            paddingVertical: '4%',
            // flexWrap: 'wrap',
          }}
        >
          {/* <View
            style={{ width: '25%', height: '25%', backgroundColor: 'white', borderRadius: 20 }}
          ></View>
          <View
            style={{ width: '25%', height: '25%', backgroundColor: 'white', borderRadius: 20 }}
          ></View>
          <View
            style={{ width: '25%', height: '25%', backgroundColor: 'white', borderRadius: 20 }}
          ></View> */}
          <View
            style={{
              // backgroundColor: 'red',
              height: '33%',
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              marginTop: 7,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              height: '33%',
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              // marginTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              height: '33%',
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              // marginTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
            <View
              style={{ width: '30%', height: '85%', backgroundColor: '#C4C4C4', borderRadius: 20 }}
            ></View>
          </View>
        </View>
      </SafeAreaView>
    </MainView>
  )
}

export default SinglePlayer

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
})
