import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { FolderUp, ArrowUpRight } from "lucide-react-native";
const Project = () => {

  // va faloir utilise expo image picker a la place
  const handleSelectImage = () => {
    Platform.OS === "web";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {};
    input.click();
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logoFoliode}
          source={require("../../assets/images/foliode-logo-text-blanc.png")}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.titlePage}>Premier texte</Text>
        <Text style={styles.descText}>Deuxième texte</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nom de la competence"
          placeholderTextColor="#7D7E83"
        />
        <TouchableOpacity
          onPress={handleSelectImage}
          style={[styles.textInput, styles.imageInput]}
        >
          <FolderUp color="#7D7E83" size={24} />
          <Text style={styles.textImageInput}>Choisir une image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={styles.buttonText}>Ajouter la compétence</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.titreCard}>Vos competence</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.contentRight}>
            <Image
              source={{ uri: "https://picsum.photos/500/300?random=1" }}
              style={styles.imageStyle}
            />
            <View style={styles.textRight}>
              <Text style={styles.titreProjet}>Site de vente de sushi</Text>
            </View>
          </View>
          <View>
            <ArrowUpRight style={styles.arrow} size={22} />
          </View>
        </View>
      </View>
    </View>
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

  //! Projet Card

  cardHeader: {
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    color: "#FFFFFF",
  },
  titreCard: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  card: {
    padding: 16,
    backgroundColor: "#141414",
    borderRadius: 8,
  },

  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: "#141414",
    paddingHorizontal: 15,
    paddingVertical: 23.5,
    borderRadius: 13,
    color: "#FFFFFF",
    fontSize: 16,
  },
  imageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141414",
    padding: 12,
    borderRadius: 8,
  },
  imageIcon: {
    marginRight: 8,
    fontSize: 20,
  },
  imageInput: {
    flexDirection: "row",
    alignItems: "center",
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
  textImageInput: {
    color: "#7D7E83",
    marginLeft: 8,
  },
});

export default Project;
