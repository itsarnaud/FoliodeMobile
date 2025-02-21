import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onRegister } = useAuth();

  const login = async () => {
    const result = await onLogin!(email, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const register = async () => {
    const result = await onRegister!(email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      login();
    }
  };
  return (
   <View>
      <TextInput placeholder="email" onChangeText={(text: string) => setEmail(text)} value={email}></TextInput>
      <TextInput placeholder="password" secureTextEntry={true} onChangeText={(text: string) => setPassword(text)} value={password}></TextInput>
      <Button onPress={login} title=" Signin"></Button>
      {/* <Button onPress={register} title="signout"></Button> */}
   </View>
  );
};

export default Login;
