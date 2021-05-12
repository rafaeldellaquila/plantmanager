import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';
import fonts from '../styles/fonts';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Olá,</Text>
        <Text style={styles.userName}>
          John Doe
        </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://unavatar.now.sh/github/rafaeldellaquila',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greetings: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
  },
});
