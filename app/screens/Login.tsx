import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import {
  Mail,
  ArrowLeft,
  LockKeyhole,
  Eye,
  EyeOff,
  Link,
} from "lucide-react-native";

const Login = () => {
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("azerty1234");
  const { onLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    const result = await onLogin!(email, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.title}>Bon Retour !</Text>
      <Text style={styles.under_title}>
        Entrez votre email et votre mot de passe pour vous connecter
      </Text>
      <View>
        <Text style={styles.text_input}>Email</Text>
        <View style={styles.container_input}>
          <Mail style={styles.icon_input} color="#fff" size={22} />
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#fff"
            onChangeText={(text: string) => setEmail(text)}
            value={email}
          ></TextInput>
        </View>

        <Text style={styles.text_input}>Mot de passe</Text>
        <View style={styles.container_input}>
          <LockKeyhole style={styles.icon_input} color="#fff" size={22} />
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#fff"
            secureTextEntry={!showPassword}
            onChangeText={(text: string) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.icon_input_eye}
          >
            {showPassword ? (
              <EyeOff style={styles.icon_input} color="#fff" size={22} />
            ) : (
              <Eye style={styles.icon_input} color="#fff" size={22} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.text_mdp_forgot}>Mot de passe oublié ?</Text>
        <View style={styles.container_line}>
          <View style={styles.line} />
        </View>
        <Text style={styles.footerText}>
          Vous n'avez pas de compte ? {/* <Link href="" color="#3E3F92" /> */}
        </Text>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        {/* <Button onPress={register} title="signout"></Button> */}
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

export default Login;
