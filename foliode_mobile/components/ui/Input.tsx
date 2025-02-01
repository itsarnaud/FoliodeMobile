import { TextInput, StyleSheet, TextInputProps } from "react-native";

export function Input({ style, ...props }: TextInputProps) {
  return <TextInput {...props} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#141414',
      color: '#FFFFFF',
      fontSize: 16,
      borderRadius: 13,
      paddingHorizontal: 15, 
      paddingVertical: 23.5,
    },
  });