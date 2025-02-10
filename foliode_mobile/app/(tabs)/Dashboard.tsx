import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Card } from "@/components/ui/Card";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { ProjectCard } from "@/components/ui/ProjectCardItem";
const Dashboard = () => {
  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.container}>
        <HeaderTitle
          title="Vos Projets"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={styles.cardRow}>
          <Card title="Votre Note" note="../20" />
          <Card title="Votre Note" note="../20" />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Card title="Nombre de projets" note="4" />
        </View>
        <ProjectCard
          headerTitle="Vos projets"
          voirplus="Voir plus"
          data={[
            {
              title: "Foliode",
              subtitle: "12/02/03",
              image: "https://picsum.photos/500/300?random=1",
            },
            {
              title: "Site de vente de sushi",
              subtitle: "12/02/03",
              image: "https://picsum.photos/500/300?random=1",
            },
          ]}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    gap: 11,
    marginBottom: 11,
  },
});

export default Dashboard;
