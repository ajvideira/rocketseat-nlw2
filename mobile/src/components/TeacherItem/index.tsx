import React, { useState } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Teacher from '../../models/teacher';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleLinkToWhatsapp() {
    await api.post('connections', { user_id: teacher.id });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function toggleFavorited() {
    let favorites: Teacher[] = [];
    const favoritesRaw = await AsyncStorage.getItem('favorites');
    if (favoritesRaw) {
      favorites = JSON.parse(favoritesRaw);
    }
    if (favorited) {
      favorites.splice(
        favorites.findIndex((favorite) => {
          return favorite.id === teacher.id;
        }),
        1
      );
    } else {
      favorites.push(teacher);
    }
    setIsFavorited(!isFavorited);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'    '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
            onPress={toggleFavorited}
          >
            <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};
export default TeacherItem;
