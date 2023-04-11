import { StyleSheet } from 'react-native'

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

export default styles
