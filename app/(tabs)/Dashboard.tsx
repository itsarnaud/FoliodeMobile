import React, { useCallback, useRef, useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text, ActivityIndicator, RefreshControl } from "react-native";
import { globalStyles } from "../styles/styles";
import { useRouter, useFocusEffect } from "expo-router";

import { Card } from "@/app/components/ui/Card";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { useUserData } from "@/app/utils/tokenData";
import { usePortfolio } from "@/app/context/PortfolioContext";
import ProjectDisplay from '@/app/components/ui/ProjectDisplay';

const Dashboard = () => {
  const userData = useUserData();
  const { portfolio, loading, error, getCompleteImageUrl, fetchPortfolioData, needsRefresh, clearNeedsRefresh } = usePortfolio();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  // Utiliser useRef pour suivre si le composant est monté
  const isMountedRef = useRef(true);
  // Un flag pour suivre si les données ont déjà été chargées
  const dataLoadedRef = useRef(false);

  // Nettoyer lors du démontage
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Fonction de rafraîchissement à la demande
  const onRefresh = useCallback(async () => {
    if (!isMountedRef.current) return;
    setRefreshing(true);
    await fetchPortfolioData(true); // Force refresh
    if (isMountedRef.current) {
      setRefreshing(false);
    }
  }, [fetchPortfolioData]);

  // Utiliser useFocusEffect uniquement pour le premier chargement
  useFocusEffect(
    useCallback(() => {
      if (needsRefresh) {
        fetchPortfolioData(true);
        clearNeedsRefresh();
      }
    }, [needsRefresh])
  );

  const handleProjectPress = (projectTitle: string, projectId: string) => {
    router.push({
      pathname: "/project-details",
      params: { title: projectTitle, id: projectId }
    });
  };

  if (!userData) {
    return null;
  }

  return (
    <>
      <HeaderLogo />
      <ScrollView 
        style={globalStyles.containerPage}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#3E3F92"]}
            tintColor="#3E3F92"
          />
        }
      >
        <HeaderTitle
          title={`Bonjour, ${userData.firstname}`}
          description={
            portfolio?.url
              ? `Vous pouvez voir votre portfolio ici : ${portfolio.url}`
              : "Vous pouvez voir votre portfolio ici :"
          }
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

            {portfolio.projects && (
              <ProjectDisplay
                projects={portfolio.projects}
                getCompleteImageUrl={getCompleteImageUrl}
                onArrowPress={handleProjectPress}
                headerTitle="Vos projets"
                voirplus="Voir plus"
              />
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
  },
});

export default Dashboard;