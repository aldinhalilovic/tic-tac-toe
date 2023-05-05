export const checkListWinner = (boardSet: Set<string | null>) => {
  const boardSetList = Array.from(boardSet)
  if (boardSetList.includes(null)) return false
  return boardSetList.length === 1 && boardSetList[0] ? boardSetList[0] : null
}
