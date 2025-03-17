import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { globalStyles } from "@/app/styles/styles";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { usePortfolio } from "@/app/context/PortfolioContext";
import { ArrowLeft } from "lucide-react-native";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";

export default function ProjectDetails() {
  const { title, id } = useLocalSearchParams<{ title: string; id: string }>();
  const router = useRouter();
  const { portfolio, getCompleteImageUrl } = usePortfolio();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (portfolio && portfolio.projects) {
      const foundProject = portfolio.projects.find((p) => p.id === id);
      setProject(foundProject);
    }
  }, [portfolio, id]);

  return (
    <>
      <HeaderLogo />

      <ScrollView style={globalStyles.containerPage}>
        <View style={styles.arrowContainer}>
          <ArrowLeft
            color="#fff"
            size={24}
            onPress={() => {
              router.back();
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    marginTop: 90.3,
  },
});
