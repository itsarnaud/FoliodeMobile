import React from "react";
import { Image, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";

const Profile = () => {
  return (
    <>
      <View style={styles.fixedHeader}>
                    <Image
                      style={styles.logoFoliode}
                      source={require("../../assets/images/foliode-logo-text-blanc.png")}
                    />
                  </View>

    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
     
      <View style={styles.headerContainer}>
        <Text style={styles.titlePage}>Profil</Text>
        <Text style={styles.descText}>Vous pouvez modifier les informations de votre profil ici</Text>
      </View>
      <View style={styles.formContainer}>
      <View style={styles.card}>
      <Text style={styles.titreCard}>Nom</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Royer"
        placeholderTextColor="#7D7E83"
      />
      </View>
      <View style={styles.card}>
      <Text style={styles.titreCard}>Prénom</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Arnaud"
        placeholderTextColor="#7D7E83"
      />
      </View>
      <View style={styles.card}>
      <Text style={styles.titreCard}>Nom d'utilisateur</Text>
      <TextInput
        style={styles.textInput}
        placeholder="cestarnaud"
        placeholderTextColor="#7D7E83"
      />
      </View>
      <View style={styles.card}>
      <Text style={styles.titreCard}>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="arnaud.royer@gmail.com"
        placeholderTextColor="#7D7E83"
      />
      </View>
      <View style={styles.card}>
      <Text style={styles.titreCard}>Mot de passe</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Votre mot de passe"
        placeholderTextColor="#7D7E83"
      />
      </View>
     

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.buttonText}>Modifier</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  logoFoliode: {
    height: 35,
    width: 123,
    marginTop: 64,
  },
  container: {
    backgroundColor: "#000000",
    marginHorizontal: 15,
  },
  headerContainer: {
    marginTop: 20.3,
    marginBottom: 30.5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titlePage: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  descText: {
    color: "#7D7E83",
    fontSize: 17,
    fontWeight: "regular",
  },
  cardRow: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 11,
  },
  card: {
    backgroundColor: "#141414",
    borderRadius: 8,
  },
  littlecard: {
    flex: 1,
  },
  cardContainer: {},
  paraCard: {
    color: "#A1A1A3",
    fontSize: 22,
  },
  titreCard: {
    color: "#FFFFFF",
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 10,
  },

  //! Projet Card

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 16,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cardItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  itemText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 16,
  },
  contentRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  textRight: {
    gap: 4,
  },
  titreProjet: {
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
  },
  arrow: {
    backgroundColor: "#3E3F92",
    borderRadius: 100,
    padding: 5,
    fontSize: 20,
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    zIndex: 1000,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  contentContainer: {
    paddingBottom: 20,
    paddingTop: 100, 
  },
  
  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: "#141414",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 13,
    color: "#FFFFFF",
    fontSize: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3E3F92",
    paddingVertical: 11,
    borderRadius: 100,
    alignItems: "center",
  },
});

export default Profile;
