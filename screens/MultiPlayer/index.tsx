import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import MainView from '../../components/MainView'
import SquareBox from '../../components/squareBox'
import styles from './style'
import ModalTab from '../../components/modal'
import Header from '../../components/header'
import { Foundation } from '@expo/vector-icons'
import { useInputModal } from '../../hooks/useInputModal'

const MultiPlayer = () => {
  const initBoardState: (null[] | string[])[] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [winner, setWinner] = useState<string | null>(null)
  const [boardFields, setBoardFields] = useState(initBoardState)

  const {
    modal: firstPlayerModal,
    showModal: showFirstPlayerModal,
    value: firstPlayerName,
  } = useInputModal({ label: 'Enter first player', defaultValue: 'Player One' })

  const {
    modal: secondPlayerModal,
    showModal: showSecondPlayerModal,
    value: secondPlayerName,
  } = useInputModal({ label: 'Enter second player', defaultValue: 'Player Two' })

  const [playerXScore, setPlayerXScore] = useState<number>(0)
  const [playerOScore, setPlayerOScore] = useState<number>(0)

  const [canPlay, setCanPlay] = useState<boolean>(true)
  const [player, setPlayer] = useState<string>('X')
  const [draw, setDraw] = useState<boolean>(false)

  const checkListWinner = (boardSet: Set<string | null>) => {
    const boarSetList = Array.from(boardSet)
    if (boarSetList.includes(null)) return false
    return boarSetList.length === 1 && boarSetList[0] ? boarSetList[0] : null
  }

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
        ? setPlayerXScore((prev) => prev + 1)
        : setPlayerOScore((prev) => prev + 1)
    }

    if (currentWinner) {
      setWinner(currentWinner.toString() === 'X' ? firstPlayerName : secondPlayerName)
      console.log('win', currentWinner)
    } else {
      setDraw(draw)
    }
  }

  const onClickFn = (i: number, j: number) => {
    if (boardFields[i][j] === null && canPlay) {
      const newArray = [...boardFields]
      newArray[i][j] = player
      setPlayer(player === 'X' ? 'O' : 'X')
      setBoardFields(newArray)
      checkingWinner()
    }
  }

  const playAgain = () => {
    const clearTable = [...initBoardState]
    setBoardFields(clearTable)
    setWinner(null)
    setDraw(false)
  }

  const hideModal = () => {
    setCanPlay(false)
    setWinner(null)
    setDraw(false)
  }

  const restart = () => {
    const clearTable = [...initBoardState]
    setBoardFields(clearTable)
    setWinner(null)
    setPlayerOScore(0)
    setPlayerXScore(0)
    setPlayer('X')
    setCanPlay(true)
    setDraw(false)
  }

  console.log({
    firstPlayerName,
    secondPlayerName,
  })

  useEffect(() => {
    showFirstPlayerModal()
  }, [])

  useEffect(() => {
    if (firstPlayerName && !secondPlayerName) {
      showSecondPlayerModal()
    }
  }, [firstPlayerName])

  return (
    <MainView>
      <SafeAreaView style={{ justifyContent: 'space-evenly', flex: 1 }}>
        <Header
          player1Score={playerXScore}
          player2Score={playerOScore}
          player1={firstPlayerName || 'Player One'}
          player2={secondPlayerName || 'Player Two'}
          activePlayer={player}
        />
        <TouchableOpacity style={{ alignSelf: 'center', height: 80, marginTop: 20 }}>
          {!canPlay ? (
            <Foundation name='refresh' size={80} color='white' onPress={restart} />
          ) : null}
        </TouchableOpacity>
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
        <ModalTab
          show={!!winner || draw}
          onClose={playAgain}
          onGoBack={hideModal}
          winner={winner}
        />

        {firstPlayerModal}
        {secondPlayerModal}
      </SafeAreaView>
    </MainView>
  )
}

export default MultiPlayer
