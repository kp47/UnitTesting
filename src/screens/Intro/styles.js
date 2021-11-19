import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logo: {
    height: '45%',
    width: '100%',
    justifyContent: 'center',
  },
  form: {
    marginHorizontal: 10,
  },
  images: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  inputFormItems: {
    marginHorizontal: 30,
    fontSize: 18,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#39c6ed',
    marginTop: 10,
  },
  register: {
    height: 50,
    width: '85%',
    marginTop: 30,
    marginHorizontal: 40,
    backgroundColor: '#55f2dd',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainLinks: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  links: {
    marginTop: 30,
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 10,
  },
  login: {
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#3590e6',
  },
  fpStyle: {alignSelf: 'flex-end', marginRight: 30},
  errorColor: {color: 'red'},
  boldText: {fontWeight: 'bold'},
});

export default styles;
