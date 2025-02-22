import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "../styles/styles";

import { Card } from "@/app/components/ui/Card";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { ProjectCard } from "@/app/components/ui/ProjectCardItem";
const Dashboard = () => {
  return (
    <>
      <HeaderLogo />
       <ScrollView style={globalStyles.containerPage}>
          <HeaderTitle
          title="Bonjour, Timothé"
          description="Vous pouvez voir votre portfolio ici : "
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
