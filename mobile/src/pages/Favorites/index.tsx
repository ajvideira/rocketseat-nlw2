import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Teacher from '../../models/teacher';

import styles from './styles';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(() => {
    (async function () {
      const favoritesRaw = await AsyncStorage.getItem('favorites');
      if (favoritesRaw) {
        setFavorites(JSON.parse(favoritesRaw));
      } else {
        setFavorites([]);
      }
    })();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />
      <ScrollView
        style={styles.favorites}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {favorites.map((favorite) => (
          <TeacherItem key={favorite.id} teacher={favorite} favorited={true} />
        ))}
      </ScrollView>
    </View>
  );
}
