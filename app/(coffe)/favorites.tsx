import Favorite from '@/components/Coffe/Favorite'; // Certifique-se de que o caminho esteja correto
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Favorite />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})