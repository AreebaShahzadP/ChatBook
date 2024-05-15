import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 150,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1.5,
    // backgroundColor: 'red',
    paddingVertical: 20,
    // justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 0.5,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderColor: '#2096F3',
  },
  input: {
    flex: 1,
  },
  btn: {
    height: 50,
    backgroundColor: '#2096F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
