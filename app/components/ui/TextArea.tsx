import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInputProps,
} from "react-native";

interface TextAreaProps extends TextInputProps {
  label: string;
}

export function TextArea({ style, label, value, onChangeText, ...props }: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [23.5, 10],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 13],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ["#777", "#FFF"],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        multiline={true}
        numberOfLines={4}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, isFocused || value ? styles.inputFocused : null]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  label: {
    position: "absolute",
    left: 15,
    backgroundColor: "transparent",
    zIndex: 1,
    color: "#A1A1A3",
    fontWeight: 400,
  },
  input: {
    backgroundColor: "#141414",
    color: "#FFFFFF",
    fontSize: 16,
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 23.5,
    height: 122,
    textAlignVertical: "top",
  },
  inputFocused: {
    paddingTop: 30,
    paddingBottom: 17,
  },
});
