import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '60%',
    height: '30%',
    backgroundColor: '#391898',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-evenly',
  },
  input: {
    width: '90%',
    height: 40,
    margin: 12,
    fontSize: 16,
    borderBottomWidth: 2,
    padding: 10,
    borderColor: 'white',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: { color: 'white', fontSize: 20, fontWeight: '600' },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 18 },
})

export default styles
