import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
export const unstable_settings = {
    headerShown: false,
  };
export default function Index() {
  return (
    
    <View style={styles.container}>
      <View style={styles.content}>
         <Image style={styles.icon_foliode} source={require('../assets/foliode-logo.png')}/>
        <Text style={styles.title}>Commencer Maintenant ! </Text>
        <Text style={styles.under_title}>
          Transformez vos projets en un portfolio professionnel
        </Text>
      </View>
      <View>
      <View style={styles.container_line}>
          <View style={styles.line} />
        </View>
      <View style={styles.button_container}>
        <Link href="/screens/Register" style={styles.button}>
          <Text style={styles.button_text}>S'inscrire</Text>
        </Link>
        <Link href="/screens/login" style={[styles.button,styles.button_singin]}>
          <Text style={styles.button_text}>Se connecter</Text>
        </Link>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  content: {
    marginTop: 180,
  },
  icon_foliode: {
    width: 132,
    height: 136,
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 32,
    marginTop: 50,
  },
  under_title: {
    color: "#7D7E83",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
    marginTop: 30,
  },
  hr: {
    width: 393,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#46474D",
  },
  container_line: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#46474D",
  },
  button: {
    color: "#fff",
    width: 173,
    height: 54,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#3E3F92",
  },
  button_text: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
    lineHeight: 50,
  },
  button_singin: {
    backgroundColor: "#3E3F92",
  },
  button_container: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 13,
  },
});
