import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function HeaderLogo() {
  return (
    <View style={styles.fixedHeader}>
      <Image
        style={styles.logoFoliode}
        source={require('../../../assets/foliode-logo-text-blanc.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
    zIndex: 1000,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  logoFoliode: {
    height: 35,
    width: 123,
    marginTop: 34,
  },
});