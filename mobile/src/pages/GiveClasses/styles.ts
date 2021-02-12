import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 32,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFF',
    maxWidth: 169,
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 24,
    maxWidth: 240,
    color: '#D4C2FF',
  },
  okButton: {
    width: 294,
    height: 56,
    backgroundColor: '#04D361',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    lineHeight: 26,
    color: '#FFF',
  },
});
export default styles;
