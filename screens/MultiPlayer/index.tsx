import React, { useState } from 'react'
import { View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Xskin from '../../assets/images/Xskin2.svg'
import Oskin from '../../assets/images/Oskin2.svg'
import MainView from '../../components/MainView'
import PlayerOption from '../../components/playeroption'
import Score from '../../components/score'
import SquareBox from '../../components/squareBox'
import styles from './style'

const MultiPlayer = () => {
  const initBoardState: (null[] | string[])[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [player1Score, setPlayer1Score] = useState<number>(0)
  const [player2Score, setPlayer2Score] = useState<number>(0)
  const [boardFields, setBoardFields] = useState(initBoardState)
  const [player, setPlayer] = useState<boolean>(true)

  const checkListWinner = (boardSet: Set<string | null>) => {
    const boarSetList = Array.from(boardSet)
    return boarSetList.length === 1 && boarSetList[0] ? boarSetList[0] : null
  }

  const checkingWinner = () => {
    let winner: string | null = null
    for (let i = 0; i < boardFields.length; i++) {
      const rowSet = new Set(boardFields[i])
      winner = checkListWinner(rowSet)
      if (winner) break
      const columnSet = new Set<string | null>()
      for (let j = 0; j < boardFields[i].length; j++) {
        columnSet.add(boardFields[j][i])
      }
      winner = checkListWinner(columnSet)
      if (winner) break
    }

    if (!winner) {
      const winnerCombination1 = new Set([boardFields[0][0], boardFields[1][1], boardFields[2][2]])
      const winnerCombination2 = new Set([boardFields[0][2], boardFields[1][1], boardFields[2][0]])
      winner = checkListWinner(winnerCombination1) || checkListWinner(winnerCombination2)
    }

    if (winner) {
      Alert.alert('Winner!', `Player ${winner} is winner`, [
        {
          text: 'Ok',
          onPress: () => {
            const clearTable = [...initBoardState]
            setBoardFields(clearTable)
            winner === 'X'
              ? (setPlayer1Score((prev) => prev + 1), setPlayer(true))
              : (setPlayer2Score((prev) => prev + 1), setPlayer(false))
          },
        },
      ])
    }
  }

  const onClickFn = (i: number, j: number) => {
    if (boardFields[i][j] === null) {
      const newArray = [...boardFields]
      newArray[i][j] = player ? 'X' : 'O'
      setPlayer((prev) => !prev)
      setBoardFields(newArray)
      checkingWinner()
    }
  }

  return (
    <MainView>
      <SafeAreaView>
        <View style={styles.header}>
          <PlayerOption image={Xskin} title='Player one' />
          <Score player1={player1Score} player2={player2Score} />
          <PlayerOption image={Oskin} title='Player two' />
        </View>
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

export default MultiPlayer
