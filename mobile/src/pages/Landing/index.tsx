import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassesImg from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function Landing() {
  const navigation = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async function () {
      const { data } = await api.get('/connections');
      setTotalConnections(data.total);
    })();
  }, []);

  function handleNavigationToGiveClassesPage() {
    navigation.navigate('GiveClasses');
    return;
  }

  function handleNavigationToStudyPage() {
    navigation.navigate('Study');
    return;
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem vindo,{'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigationToStudyPage}
        >
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigationToGiveClassesPage}
        >
          <Image source={giveClassesImg} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections}{' '}
        {totalConnections === 1
          ? 'conexão já realizada'
          : 'conexões já realizadas  '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}
