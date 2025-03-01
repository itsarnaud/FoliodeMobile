import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";

interface StepOneProps {
  username: string;
  setUsername: (value: string) => void;
  userTitle: string;
  setUserTitle: (value: string) => void;
  subtitle: string;
  setSubtitle: (value: string) => void;
  presentation: string;
  setPresentation: (value: string) => void;
}

const StepOne = ({
  username,
  setUsername,
  userTitle,
  setUserTitle,
  subtitle,
  setSubtitle,
  presentation,
  setPresentation,
}: StepOneProps) => {
  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Input
          label="Nom d’utilisateur"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          label="Titre de l’utilisateur"
          value={userTitle}
          onChangeText={setUserTitle}
        />
        <Input
          label="Sous titre"
          value={subtitle}
          onChangeText={setSubtitle}
        />
        <TextArea
          label="Présentation"
          value={presentation}
          onChangeText={setPresentation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
});

export default StepOne;