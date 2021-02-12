import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: '#8257E5',
  },
  topBar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 29,
    color: '#FFF',
    maxWidth: 150,
    marginVertical: 40,
  },
});

export default styles;
