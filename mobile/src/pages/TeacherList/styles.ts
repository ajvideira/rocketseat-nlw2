import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 24,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  inputLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 22,
    color: '#D4C2FF',
    marginBottom: 4,
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#FAFAFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
    height: 48,
    justifyContent: 'center',
  },
  submitButton: {
    height: 48,
    backgroundColor: '#04D361',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    lineHeight: 26,
    color: '#FFF',
  },
});

export default styles;
