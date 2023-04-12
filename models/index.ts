import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SvgProps } from 'react-native-svg'

export type StackProps = {
  Intro: undefined
  HomeStacks: undefined
}

export type HomeTabProps = {
  Home: undefined
  Profile: undefined
}

export type HomeStackProps = {
  HomeTab: undefined
  Single: undefined
  MultiPlayer: undefined
}

export type HomeProps = {
  navigation: NativeStackNavigationProp<HomeStackProps, 'HomeTab'>
}

export type SquareBoxProps = {
  value: string | null
  onClickFn: () => void
}

export type IntroProps = {
  navigation: NativeStackNavigationProp<StackProps, 'Intro'>
}

export type GameOptionProps = {
  circleBackgroundColor: string
  titleBackgroundColor: string
  title: string
  image: React.FC<SvgProps>
  onPress?: () => void
}

export type ScoreType = {
  player1: number
  player2: number
}

export type PlayerOptionType = {
  option: string
  title: string
  activePlayer: string
}

export type ModalProps = {
  show: boolean
  onClose: () => void
  onGoBack: () => void
  winner: string | null
}
