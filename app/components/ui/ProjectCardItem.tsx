import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowUpRight, Subtitles } from "lucide-react-native";

interface ProjectCardItem {
  title: string;
  subtitle?: string;
  image: string | null;
}

interface ProjectCardProps {
  headerTitle: string;
  voirplus?: string;
  data: ProjectCardItem[];
}

export function ProjectCard({ headerTitle, data, voirplus }: ProjectCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.titreCard}>{headerTitle}</Text>
        <Text style={styles.titreCard}>{voirplus}</Text>
      </View>
      {data.map((project, index) => (
        <View style={styles.cardContent} key={index}>
          <View style={styles.contentRight}>
            {project.image ? (
              <Image source={{ uri: project.image }} style={styles.imageStyle} />
            ) : (
              <View style={[styles.imageStyle, styles.noImage]} />
            )}
            <View style={styles.textRight}>
              <Text style={styles.titreProjet}>{project.title}</Text>
              {project.subtitle && (
                <Text style={styles.subtitles}>{project.subtitle}</Text>
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.containerArrow}>
            <ArrowUpRight style={styles.arrow} size={22} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#141414",
    borderRadius: 8,
    marginBottom: 80,
  },
  cardHeader: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titreCard: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
  },
  contentRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 16,
  },
  textRight: {
    gap: 4,
  },
  titreProjet: {
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
  },
  subtitles: {
    fontSize: 14,
    fontWeight: 400,
    color: "#A1A1A3",
  },
  arrow: {
    padding: 0,
    fontSize: 20,
    color: "#FFFFFF",
  },
  containerArrow: {
    backgroundColor: "#3E3F92",
    borderRadius: 100,
    padding: 5,
  },
  noImage: {
    backgroundColor: '#2A2A2A',
  },
});
