import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//Usando essa dependencia para contornar o SafeAreaView do Native que funciona apenas no IOS

import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}suas plantas{'\n'}de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} resizeMode='contain' />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>&gt; </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  image: {
    height: Dimensions.get('window').width * 0.7,
  },

  button: {
    backgroundColor: colors.green,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 40,
    width: 56,
    height: 56,
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
