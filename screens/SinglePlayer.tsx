import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ooption, Xoption } from '../assets/images'

import MainView from '../components/MainView'
import PlayerOption from '../components/playeroption/PlayerOption'
import Score from '../components/score/Score'
import SquareBox from '../components/squareBox'

const SinglePlayer = () => {
  const initBoardState: (null[] | string[])[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [boardFields, setBoardFields] = useState(initBoardState)
  const [player, setPlayer] = useState<boolean>(true)

  const checkListWinner = (boardSet: Set<string | null>) => {
    const boarSetList = Array.from(boardSet)
    return boarSetList.length === 1 && boarSetList[0] ? boarSetList[0] : null
  }

  const checkingWinner = () => {
    let winner = null
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
          <PlayerOption image={Xoption} title='Player one' />
          <Score />
          <PlayerOption image={Ooption} title='Player two' />
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

export default SinglePlayer

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
  contentBox: {
    height: '58%',
    width: '80%',
    backgroundColor: '#391898',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '25%',
    borderRadius: 20,
  },
  content: {
    height: '90%',
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
