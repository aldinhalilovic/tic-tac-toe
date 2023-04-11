import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 70,
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    gap: 50,
    marginBottom: 20,
  },
  star: {
    width: 60,
    height: 60,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 22,
    height: '9.7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#843CE0',
    fontWeight: '600',
    fontSize: 30,
    letterSpacing: 1.3,
  },
})

export default styles
