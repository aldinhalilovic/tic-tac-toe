import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type GameOptionProps = {
  circleBackgroundColor: string
  titleBackgroundColor: string
  title: string
  image: ImageSourcePropType
}

const GameOption = (props: GameOptionProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.circle, { backgroundColor: props.circleBackgroundColor }]}>
          <Image source={props.image} />
        </View>
        <View
          style={[
            styles.title,
            {
              borderColor: props.circleBackgroundColor,
              backgroundColor: props.titleBackgroundColor,
            },
          ]}
        >
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default GameOption

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 100,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 200,
    backgroundColor: 'red',
    height: 55,
    borderWidth: 2,
    marginLeft: -10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
})
