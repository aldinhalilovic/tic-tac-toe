import { StyleSheet } from 'react-native'

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

export default styles
