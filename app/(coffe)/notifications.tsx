import Notification from '@/components/Coffe/Notification'; // Certifique-se que o caminho esteja correto
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Notification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})