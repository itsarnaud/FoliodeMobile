import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { globalStyles } from "../styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { TemplateCard } from "@/app/components/ui/Template/SelectTemplate";
import { PresetCard } from "@/app/components/ui/Template/SelectPreset";
import { templates, Template } from "@/app/interface/Template";
import { usePortfolio } from "@/app/context/PortfolioContext";
import { ButtonFull } from "@/app/components/ui/ButtonFull";

const Edit = () => {
  const { portfolio, loading, fetchPortfolioData, updatePortfolioSettings } = usePortfolio();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Chargement initial des données
  useEffect(() => {
    fetchPortfolioData();
  }, []);

  // Mise à jour des états locaux lorsque les données du portfolio sont chargées
  useEffect(() => {
    if (portfolio) {
      setSelectedTemplate(portfolio.template || null);
      
      // Si un preset correspond à la configuration de couleurs actuelle, le sélectionner
      const currentPreset = templates.find(t => 
        t.color.primary === portfolio.config?.colors?.primary && 
        t.color.secondary === portfolio.config?.colors?.secondary
      );
      
      if (currentPreset) {
        setSelectedPreset(currentPreset.id);
      } else {
        setSelectedPreset(null);
      }
    }
  }, [portfolio]);

  const handleUpdateSettings = async () => {
    if (!selectedTemplate) return;

    try {
      setIsUpdating(true);
      
      const selectedTemplateObj = templates.find(t => t.id === selectedTemplate);
      const selectedPresetObj = templates.find(t => t.id === selectedPreset);
      
      const colorConfig = selectedPresetObj ? selectedPresetObj.color : selectedTemplateObj?.color;
      
      await updatePortfolioSettings({
        template: selectedTemplate,
        config: {
          colors: colorConfig,
          font: portfolio?.config?.font || ""
        }
      });
      
      // Rafraîchir les données pour confirmer les changements
      await fetchPortfolioData(true);
    } catch (error) {
      console.error("Erreur lors de la mise à jour des paramètres:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.containerPage}>
        <HeaderTitle
          title="Éditer votre portfolio"
          description="Vous pouvez modifier le style de votre portfolio ici"
        />
        
        <View style={styles.formContainer}>
          <TemplateCard
            title="Les templates"
            selectedTemplate={selectedTemplate}
            onTemplateSelect={setSelectedTemplate}
            templates={templates}
          />

          <PresetCard
            title="Preset de couleur"
            selectedTemplate={templates.find(t => t.id === selectedTemplate) || null}
            templates={templates}
            selectedPreset={selectedPreset}
            onPresetSelect={setSelectedPreset}
          />
          
          <ButtonFull 
            text={isUpdating ? "Mise à jour en cours..." : "Appliquer les modifications"} 
            onPress={handleUpdateSettings}
            style={styles.updateButton}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
  updateButton: {
    marginTop: 20,
  }
});

export default Edit;