import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { ArrowUpRight } from "lucide-react-native";
const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logoFoliode}
          source={require("../../assets/images/foliode-logo-text-blanc.png")}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.titlePage}>Bonjour, Timothé</Text>
        <Text style={styles.descText}>Ajouter</Text>
      </View>
      <View style={styles.cardRow}>
        <View style={[styles.card, styles.littlecard]}>
          <Text style={styles.titreCard}>Votre Note</Text>
          <Text style={styles.paraCard}>.../20</Text>
        </View>
        <View style={[styles.card, styles.littlecard]}>
          <Text style={styles.titreCard}>Votre Note</Text>
          <Text style={styles.paraCard}>.../20</Text>
        </View>
      </View>
      <View style={[styles.card, { marginBottom: 20 }]}>
        <Text style={styles.titreCard}>Nombre de projets</Text>
        <Text style={styles.paraCard}>4</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.titreCard}>Titre Header</Text>
          <Text style={styles.titreCard}>Texte droite</Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.contentRight}>
            <Image
              source={{ uri: "https://picsum.photos/500/300?random=1" }}
              style={styles.imageStyle}
            />
            <View style={styles.textRight}>
              <Text style={styles.titreProjet}>Site de vente de sushi</Text>
              <Text style={styles.itemText}>12/02/03</Text>
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
  cardRow: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 11,
  },
  card: {
    padding: 16,
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
    color: "#FFFFFF",
  },
});

export default Dashboard;
