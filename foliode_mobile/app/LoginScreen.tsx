import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Mail, ArrowLeft, LockKeyhole, Eye, EyeOff } from "lucide-react-native";
import { loginUser } from "@/services/Api_POST";

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await loginUser(formData);
      navigation.navigate("(tabs)", { screen: "LoginScreen" });
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        Alert.alert("Erreur de connexion", error.response.data.error);
      } else {
        Alert.alert(
          "Erreur de connexion",
          "Impossible de se connecter. Veuillez vérifier votre connexion internet."
        );
      }
    }
  };

  return (
    <ScrollView style={styles.page}>
      <View style={styles.header}></View>
      <TouchableOpacity onPress={() => navigation.navigate("index")}>
        <ArrowLeft style={styles.arrow} color="#fff" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>Bon Retour !</Text>
      <Text style={styles.under_title}>
        Entrez votre email et votre mot de passe pour vous connecter
      </Text>
      <Text style={styles.text_input}>Email</Text>
      <View style={styles.container_input}>
        <Mail style={styles.icon_input} color="#fff" size={22} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          value={formData.email}
        />
      </View>
      <Text style={styles.text_input}>Mot de passe</Text>
      <View style={styles.container_input}>
        <LockKeyhole style={styles.icon_input} color="#fff" size={22} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#fff"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          value={formData.password}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.icon_input_eye}
        >
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff style={styles.icon_input} color="#fff" size={22} />
            ) : (
              <Eye style={styles.icon_input} color="#fff" size={22} />
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text style={styles.text_mdp_forgot}>Mot de passe oublié ?</Text>
      <View style={styles.container_line}>
        <View style={styles.line} />
      </View>
      <Text style={styles.footerText}>
        Vous n'avez pas de compte ?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Créé en un !
        </Text>
      </Text>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
  },
  arrow: {
    marginLeft: 2,
  },
  header: {
    height: 90,
    width: "100%",
    backgroundColor: "#000",
  },
  icon_arrow: {
    width: 24,
    height: 24,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    marginTop: 41,
    fontWeight: "bold",
    color: "#fff",
  },
  under_title: {
    color: "#7D7E83",
    fontSize: 18,
    marginBottom: 40,
    width: 334,
  },
  text_input: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 7,
    marginBottom: 13,
  },
  container_input: {
    flexDirection: "row",
    height: 57,
    alignItems: "center",
    backgroundColor: "#23232D",
    // alignSelf: "center",
    borderRadius: 8,
    marginBottom: 29,
  },
  icon_input: {
    marginRight: 9,
    marginLeft: 18,
  },
  icon_input_eye: {
    position: "absolute",
    right: 10,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 57,
    backgroundColor: "#23232D",
    paddingRight: 45,
    borderRadius: 8,
    fontSize: 16,
    color: "#fff",
  },
  text_mdp_forgot: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 500,
    paddingRight: 45,
  },
  button: {
    width: "100%",
    height: 54,
    backgroundColor: "#3E3F92",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    display: "flex",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 150,
  },
  container_line: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 33,
    marginBottom: 33,
    marginRight: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#46474D",
  },
  link: {
    color: "#3E3F92",
    fontWeight: "bold",
  },
});

export default LoginScreen;