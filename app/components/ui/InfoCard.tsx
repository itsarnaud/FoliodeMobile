import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { X } from "lucide-react-native";
import { globalStyles } from "../../styles/styles";
 
interface InfoCardProps {
  id: string;
  title: string;
  subtitle?: string;
  image?: string | null;
  imageStyle?: object;
  additionalText?: string;
  onRemove: (id: string) => void;
  cardStyle?: object;
  titleStyle?: object;
}

export function InfoCard({
  id,
  title,
  subtitle,
  image,
  imageStyle,
  additionalText,
  onRemove,
  cardStyle,
  titleStyle,
}: InfoCardProps) {
  return (
    <View style={[globalStyles.card, styles.cardWrapper, cardStyle]}>
      <View style={styles.cardHeader}>
        
        <View style={styles.contentContainer}>
          {image && (
            <Image 
              source={{ uri: image }} 
              style={[styles.cardImage, imageStyle]} 
            />
          )}
          <View>
            <Text style={[globalStyles.titreCard, titleStyle]}>{title}</Text>
            {subtitle && <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>}
          </View>
        </View>

        <TouchableOpacity 
          style={styles.removeButton} 
          onPress={() => onRemove(id)}
        >
           <X color="#FF6161" size={24} />
        </TouchableOpacity>

      </View>
      {additionalText && (
        <Text style={styles.additionalText}>{additionalText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginVertical: 10
  },
  cardHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10
  },
  contentContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1
  },
  cardImage: {
    width: 50, 
    height: 50, 
    borderRadius: 8, 
    marginRight: 10
  },
  subtitle: {
    fontSize: 14, 
    color: '#A1A1A3', 
    marginTop: 4,
    paddingRight: 60,
  },
  removeButton: {
    padding: 5
  },
  additionalText: {
    fontSize: 14, 
    color: '#3E3F92', 
    fontWeight: '500', 
    marginTop: 5
  }
});