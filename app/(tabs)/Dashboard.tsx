import React from "react";
import { View, StyleSheet, ScrollView, Text, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/styles";

import { Card } from "@/app/components/ui/Card";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { ProjectCard } from "@/app/components/ui/ProjectCardItem";
import { useUserData } from "@/app/utils/tokenData";
import { usePortfolio } from "@/app/context/PortfolioContext";

const Dashboard = () => {
  const userData = useUserData();
  const { portfolio, loading, error, getCompleteImageUrl } = usePortfolio();

  if (!userData) {
    return null;
  }

  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.containerPage}>
      <HeaderTitle
          title={`Bonjour, ${userData.firstname}`}
          description={portfolio?.url ? `Vous pouvez voir votre portfolio ici : ${portfolio.url}` : "Vous pouvez voir votre portfolio ici :"}
        />
        
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3E3F92" />
            <Text style={styles.loadingText}>Chargement du portfolio...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : portfolio ? (
          <>
            <View style={styles.cardRow}>
              <Card title="Titre" note={portfolio.title || "Sans titre"} />
              <Card title="Template" note={portfolio.template} />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Card title="Nombre de projets" note={portfolio.projects ? portfolio.projects.length.toString() : "0"} />
            </View>
            
            {portfolio.projects && portfolio.projects.length > 0 ? (
              <ProjectCard
                headerTitle="Vos projets"
                voirplus="Voir plus"
                data={portfolio.projects.map(project => ({
                  title: project.title,
                  subtitle: project.description,
                  image: project.projectsImages && project.projectsImages.length > 0 
                    ? getCompleteImageUrl(project.projectsImages[0].img_src)
                    : null
                }))}
              />
            ) : (
              <Text style={styles.noProjectsText}>Aucun projet trouvé. Ajoutez des projets dans l'onglet Ajouter.</Text>
            )}
          </>
        ) : null}
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
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    color: "#FFFFFF",
    marginTop: 10,
  },
  errorContainer: {
    padding: 20,
    backgroundColor: "#FF000020",
    borderRadius: 8,
    marginVertical: 20,
  },
  errorText: {
    color: "#FF6161",
    textAlign: "center",
  },
  noProjectsText: {
    color: "#7D7E83",
    textAlign: "center",
    padding: 20,
  }
});

export default Dashboard;