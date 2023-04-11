import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 36,
    color: 'white',
    lineHeight: 42,
  },
  line: {
    width: '80%',
    height: 3,
    borderRadius: 50,
    backgroundColor: '#FFA800',
    alignSelf: 'flex-start',
  },
})

export default styles
