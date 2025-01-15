import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text style={styles.title}>S'inscrire sur Foliode</Text>
      <TextInput style={styles.input} placeholder="Prénom" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Nom" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor="#aaa" secureTextEntry />
      <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor="#aaa" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Déjà un compte ?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>Se connecter</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    height: 150,
    width: '100%',
    backgroundColor: '#000',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3E3F92',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  link: {
    color: '#3E3F92',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;