import React, { useState } from 'react'
import styles from './styles'
import MainView from '../../components/MainView'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header'
import { Alert, View } from 'react-native'
import SquareBox from '../../components/squareBox'
import { checkListWinner } from '../../utils'

const SinglePlayer = () => {
  const initBoardState: (null[] | string[])[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  const [boardFields, setBoardFields] = useState(initBoardState)
  const [player1Score, setPlayer1Score] = useState<number>(0)
  const [player2Score, setPlayer2Score] = useState<number>(0)
  const [canPlay, setCanPlay] = useState<boolean>(true)
  const [player, setPlayer] = useState<string>('X')
  const [draw, setDraw] = useState<boolean>(false)
  const [winner, setWinner] = useState<string | null>(null)

  const checkingWinner = () => {
    let draw = true
    let currentWinner = null
    for (let i = 0; i < boardFields.length; i++) {
      const rowSet = new Set(boardFields[i])
      currentWinner = checkListWinner(rowSet)
      if (currentWinner === false && draw === true) draw = false
      if (currentWinner) break
      const columnSet = new Set<string | null>()
      for (let j = 0; j < boardFields[i].length; j++) {
        columnSet.add(boardFields[j][i])
      }
      currentWinner = checkListWinner(columnSet)
      if (currentWinner) break
    }

    if (!currentWinner) {
      const winnerCombination1 = new Set([boardFields[0][0], boardFields[1][1], boardFields[2][2]])
      const winnerCombination2 = new Set([boardFields[0][2], boardFields[1][1], boardFields[2][0]])
      currentWinner = checkListWinner(winnerCombination1) || checkListWinner(winnerCombination2)
    }

    if (currentWinner) {
      setPlayer(currentWinner.toString())
      currentWinner === 'X'
        ? setPlayer1Score((prev) => prev + 1)
        : setPlayer2Score((prev) => prev + 1)
      setWinner(currentWinner.toString() === 'X' ? 'Aldin' : 'Computer')
      Alert.alert(`${currentWinner} je pobednik!`)
    } else {
      setDraw(draw)
    }
  }

  const onClickFn = (i: number, j: number) => {
    if (boardFields[i][j] === null && canPlay) {
      const newArray = [...boardFields]
      newArray[i][j] = player
      setPlayer('O')
      setBoardFields(newArray)
      checkingWinner()
    }
  }

  function computerPlays() {
    if (player === 'O') {
      let randomX
      let randomY

      do {
        randomX = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        randomY = Math.floor(Math.random() * (2 - 0 + 1) + 0)
      } while (boardFields[randomX][randomY] !== null && !draw)

      if (boardFields[randomX][randomY] === null) {
        const newArray = [...boardFields]
        newArray[randomX][randomY] = player
        setPlayer('X')
        setBoardFields(newArray)
      }
    }
  }

  if (player === 'O' && winner !== 'Computer') {
    computerPlays()
    checkingWinner()
  }

  if (draw) {
    Alert.alert('Draw')
  }

  return (
    <MainView>
      <SafeAreaView style={styles.container}>
        <Header
          player1Score={player1Score}
          player2Score={player2Score}
          player2='Computer'
          player1={'Aldin'}
          activePlayer={player}
        />
        <View style={styles.contentBox}>
          <View style={styles.content}>
            {boardFields.map((row, i) =>
              row.map((squareValue, j) => (
                <SquareBox
                  key={`${i}-${j}`}
                  value={squareValue}
                  onClickFn={() => onClickFn(i, j)}
                />
              )),
            )}
          </View>
        </View>
      </SafeAreaView>
    </MainView>
  )
}

export default SinglePlayer
