import { TextInput, StyleSheet, TextInputProps } from "react-native";

export function TextArea({ style, ...props }: TextInputProps) {
  return (
    <TextInput
      multiline={true}
      numberOfLines={4}
      {...props}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#FFFFFF",
    backgroundColor: "#141414",
    paddingHorizontal: 15,
    paddingTop: 23.5,
    paddingBottom: 50,
    borderRadius: 13,
    fontSize: 16,
  },
});
