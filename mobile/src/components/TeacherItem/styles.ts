import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    marginBottom: 16,
    //overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#32264D',
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#6A6180',
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    marginBottom: 24,
    color: '#6A6180',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
  },
  footer: {
    backgroundColor: '#FAFAFC',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    padding: 24,
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14,
    lineHeight: 24,
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    lineHeight: 26,
    color: '#8257E5',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    backgroundColor: '#8257E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorited: {
    backgroundColor: '#E33D3D',
  },
  favoriteImage: {
    width: 24,
    height: 24,
  },
  contactButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#04D361',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 9,
  },
  whatsappImage: {
    width: 20,
    height: 20,
  },
  contactText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    lineHeight: 26,
    color: '#FFF',
    marginLeft: 16,
  },
});
export default styles;
