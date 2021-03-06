import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIndentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleInputBlur() {
    // Colorindo ou não ao focar
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    // Colorindo ou não ao focar
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
    // mentendo cor ao preencher
  }

  async function handleSubmit() {
    //Checando se o usuário digitou o nome
    if (!name) {
      return Alert.alert('Preciso do seu nome! 🥺');
    }

    //Guardando o nome do usuário localmente no celular e
    // navegando para a tela seguinte
    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: `Prontinho, ${name}`,
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😓');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          // animação de como keyboard sobe
          Platform.OS === 'ios' ? 'padding' : 'height'
        }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '👌' : '😃'}
                </Text>

                <Text style={styles.title}>
                  Como podemos{'\n'} chamar você?
                </Text>

                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && {
                      borderColor: colors.green,
                    },
                  ]}
                  placeholder='Digite um nome'
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                />
              </View>
              <View style={styles.footer}>
                <Button
                  title='Confirmar'
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
});
