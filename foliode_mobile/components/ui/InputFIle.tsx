import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FolderUp } from "lucide-react-native";

interface InputFileProps {
  onPress: () => void;
  style?: any;
  text?: string;
}

export function InputFile({ onPress, style, text = "Choisir une image" }: InputFileProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <FolderUp color="#7D7E83" size={24} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 23.5,
  },
  text: {
    color: '#7D7E83',
    fontSize: 16,
  }
});