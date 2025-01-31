import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { Stack } from 'expo-router';

type RootStackParamList = {
  Home: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  function GoToSignup() {
    navigation.navigate('RegisterScreen');
  }

  function GoToSignIn() {
    navigation.navigate('LoginScreen' );
  }

  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.page}>
        <Image style={styles.icon_foliode} source={require('../assets/images/foliode-logo.png')}/>
        <Text style={styles.title}>Commencer Maintenant ! </Text>
        <Text style={styles.under_title}>Transformez vos projets en un portfolio professionnel</Text>
        <View style={styles.container_line}>
          <View style={styles.line} />
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button_singup} onPress={GoToSignup} accessibilityLabel="S'inscrire">
            <Text style={styles.button_text}>S'Inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_singin} onPress={GoToSignIn} accessibilityLabel="Se connecter">
            <Text style={styles.button_text}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#000',
  },
  icon_foliode: {
    width: 132,
    height: 136,
    marginTop: 250,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
    marginTop: 50,
  },
  under_title: {
    color: '#7D7E83',
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    marginTop: 30,
  },
  hr: {
    width: 393,
    height: 2,
    flexShrink: 0,
    backgroundColor: '#46474D',
  },
  container_line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 160,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#46474D',
  },
  button_singup: {
    color: '#fff',
    width: 173,
    height: 54,
    borderRadius: 5,
    marginTop: 50,
    backgroundColor: '#000',
    borderWidth: 3,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderColor: '#3E3F92',
  },
  button_text: {
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    lineHeight: 50,
  },
  button_singin: {
    color: '#fff',
    width: 173,
    height: 54,
    borderRadius: 5,
    marginTop: 50,
    backgroundColor: '#3E3F92',
    borderWidth: 3,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderColor: '#3E3F92',
    marginLeft: 10,
    gap:10,
  },
  button_container: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: "12%",

  },
});  
