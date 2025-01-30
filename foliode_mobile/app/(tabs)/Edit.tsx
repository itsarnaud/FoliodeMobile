import React, { useState } from "react";
import { Image, View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const Edit = () => {
const [isCheckedTemplate, setIsCheckedTemplate] = useState(false);
const [isCheckedPreset, setIsCheckedPreset] = useState(false);

  return (
    <ScrollView style={styles.container}>
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
      <View style={[styles.card, { marginBottom: 20 }]}>
        <Text style={styles.titreCard}>Les templates</Text>
        <View style={styles.containerAllChecked}>
          <Pressable onPress={() => setIsCheckedTemplate(!isCheckedTemplate)}>
            <View
              style={[
                styles.containerCheckedButton,
                isCheckedTemplate && styles.checkedContainerStyle,
              ]}
            >
              <View>
                <View style={styles.containerChecked}>
                  <Image
                    source={{ uri: "https://picsum.photos/500/300?random=1" }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.containerVignette}>
                    <BouncyCheckbox
                      isChecked={isCheckedTemplate}
                      size={15}
                      fillColor="#4E529E"
                      disableText
                      unFillColor="#FFFFFF  "
                      iconImageStyle={styles.iconImageStyle}
                      iconStyle={{
                        borderColor: isCheckedTemplate ? "white" : "transparent",
                        borderWidth: isCheckedTemplate ? 1 : 0,
                      }}
                      textStyle={{
                        textDecorationLine: "none",
                      }}
                      innerIconStyle={{ borderWidth: 0 }}
                      onPress={() => setIsCheckedTemplate(!isCheckedTemplate)}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.textCheckbox}>Prestige</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titreCard}>Preset de couleur</Text>

        <View style={styles.containerPresetChecked}>
          <Pressable
            onPress={() => setIsCheckedPreset(!isCheckedPreset)}
            style={[
              styles.containerPresetButton,
              isCheckedPreset && styles.checkedPreset,
            ]}
          >
            <View>
              <View>
                <View style={styles.containerChecked}>
                  <View style={styles.containerVignette}>
                    <BouncyCheckbox
                      isChecked={isCheckedPreset}
                      size={15}
                      fillColor=""
                      disableText
                      unFillColor=""
                      iconImageStyle={styles.iconImageStylePreset}
                      textStyle={{
                        textDecorationLine: "none",
                      }}
                      innerIconStyle={{ borderWidth: 0 }}
                      onPress={() => setIsCheckedPreset(!isCheckedPreset)}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.textPresetCheckbox}>Luxury</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
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
  card: {
    padding: 16,
    backgroundColor: "#141414",
    borderRadius: 8,
  },
  titreCard: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  iconImageStyle: {
    width: 6,
    height: 6,
  },

  imageStyle: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },

  //! EDIT Card

  containerChecked: {
    position: "relative",
  },
  containerVignette: {
    position: "absolute",
    right: -3,
    bottom: -2,
  },
  textCheckbox: {
    color: "#A1A1A3",
    fontSize: 14,
  },
  containerCheckedButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 8,
    paddingVertical: 8.5,
    borderRadius: 8,
  },
  containerAllChecked: {
    marginTop: 17,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  checkedContainerStyle: {
    backgroundColor: "#252525",
  },

  //! Preset de couleur

  containerPresetChecked: {
    marginTop: 17,
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  iconImageStylePreset: {
    display: "none",
  },
  checkedPreset: {
    backgroundColor: "#4E529E",
  },
  containerPresetCheckedButton: {},
  containerPresetButton: {
    paddingVertical: 14,
    paddingLeft: 16,
    backgroundColor: "#111111",
    flex: 1,
    borderRadius: 18,
  },
  textPresetCheckbox: {
    color: "#FFFFFF",
  }
});

export default Edit;
