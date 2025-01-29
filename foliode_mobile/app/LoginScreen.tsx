import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IconSymbol } from '@/components/ui/IconSymbol';
const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.page}>
      <View style={styles.header}></View>
      <TouchableOpacity  onPress={() => navigation.navigate('index')}>
      <IconSymbol name='arrow.left' style={styles.icon_arrow} color="#fff"/>
      </TouchableOpacity>
      <Text style={styles.title}>Bon Retour !</Text>
      <Text style={styles.under_title}>Entrez votre email et votre mot de passe pour vous connecter</Text>
      <Text style={styles.text_input}>Email</Text>
      <View style={styles.container_input}>
        <IconSymbol name="envelope.fill" style={styles.icon_input} color="#fff" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" />
      </View>
      <Text style={styles.text_input}>Mot de passe</Text>
      <View style={styles.container_input}>
        <IconSymbol name="lock.fill" style={styles.icon_input} color="#fff" />
        <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor="#fff" secureTextEntry={!showPassword}/>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon_input_eye}>
          <IconSymbol name={showPassword ? "eye.slash.fill" : "eye.fill"}  color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text_mdp_forgot}>Mot de passe oublié ?</Text>
      <View style={styles.container_line}>
        <View style={styles.line} />
      </View>
      <Text style={styles.footerText}>
        Vous n'avez pas de compte ?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>Créé en un !</Text>
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#000',
    marginLeft:15,
  },
  header: {
    height: 90,
    width: '100%',
    backgroundColor: '#000',
  },
  icon_arrow:{
    width: 24,
    height: 24,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    marginTop:2,
    fontWeight: 'bold',
    color:'#fff',
  },
  under_title: {
    color: '#7D7E83',
    fontSize: 18,
    marginBottom:55,
    width:334,
  },
  text_input: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 500,
    paddingHorizontal: 15,
    paddingRight: 45,
    marginTop: 7,
    marginBottom:13,
  },
  container_input:{ 
    position: 'relative',
    height: 57,
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#23232D',
    alignSelf: 'center', 
    borderRadius: 8,
    marginBottom: 23,
  },
  icon_input:{
    marginRight: 8, 
    marginLeft:8,
  },
  icon_input_eye:{
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
  input: {
    width: 350,
    height: 57,
    backgroundColor: '#23232D',
    paddingHorizontal: 15,
    paddingRight: 45,
    borderRadius: 8,
    fontSize: 16,
    color: '#fff',
  },
  text_mdp_forgot:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 500,
    paddingHorizontal: 15,
    paddingRight: 45,
    marginTop: -10,
    
 },
 button: {
  width: 355,
  height: 54,
  backgroundColor: '#3E3F92',
  borderRadius: 1000,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  marginBottom: 15,
  display: 'flex',
  alignSelf: 'center', 
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 150,
  },
  container_line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 85,
    marginBottom: 33,
    marginRight:15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#46474D',
  },
  link: {
    color: '#3E3F92',
    fontWeight: 'bold',
  },
});

export default LoginScreen;