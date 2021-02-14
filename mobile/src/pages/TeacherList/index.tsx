import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Teacher from '../../models/teacher';

import styles from './styles';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterTeachers() {
    loadFavorites();

    const { data } = await api.get<Teacher[]>('/classes', {
      params: { subject, week_day, time },
    });
    setTeachers(data);
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function loadFavorites() {
    const favoritesRaw = await AsyncStorage.getItem('favorites');
    if (favoritesRaw) {
      setFavorites(
        JSON.parse(favoritesRaw).map((favorite: Teacher) => favorite.id)
      );
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.inputLabel}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Selecione"
              placeholderTextColor="#C1BCCC"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.inputLabel}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Selecione"
                  placeholderTextColor="#C1BCCC"
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.inputLabel}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Selecione"
                  placeholderTextColor="#C1BCCC"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFilterTeachers}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
