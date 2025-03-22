import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ProjectCard } from './ProjectCardItem';

interface ProjectItem {
  id: string;
  title: string;
  description?: string;
  projectsImages?: { img_src: string }[];
}

interface ProjectDisplayProps {
  projects: ProjectItem[];
  getCompleteImageUrl: (imagePath: string) => string | null;
  onArrowPress: (title: string, id: string) => void;
  headerTitle?: string;
  voirplus?: string;
}

// Utilisation de memo pour éviter les re-renders inutiles
const ProjectDisplay = memo(({ 
  projects, 
  getCompleteImageUrl, 
  onArrowPress,
  headerTitle = "Vos projets",
  voirplus
}: ProjectDisplayProps) => {
  if (!projects || projects.length === 0) {
    return (
      <Text style={styles.noProjectsText}>
        Aucun projet trouvé. Ajoutez des projets dans l'onglet Ajouter.
      </Text>
    );
  }

  return (
    <ProjectCard
      headerTitle={headerTitle}
      voirplus={voirplus}
      data={projects.map(project => ({
        title: project.title,
        subtitle: project.description || "",
        image:
          project.projectsImages && project.projectsImages.length > 0
            ? getCompleteImageUrl(project.projectsImages[0].img_src)
            : null,
        id: project.id
      }))}
      onArrowPress={onArrowPress}
    />
  );
});

const styles = StyleSheet.create({
  noProjectsText: {
    color: "#7D7E83",
    textAlign: "center",
    padding: 20,
  },
});

export default ProjectDisplay;
