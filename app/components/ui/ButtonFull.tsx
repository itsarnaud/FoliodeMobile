import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonFullProps {
  onPress?: () => void;
  text: string;
  style?: any;
  disabled?: boolean;

}


export function ButtonFull({ onPress, text, style }: ButtonFullProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3E3F92",
    paddingVertical: 11,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});