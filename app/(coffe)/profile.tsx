import Profile from '@/components/Coffe/Profile';
import React from 'react';
import { StyleSheet, View } from 'react-native';
export default function profile() {
  return (
    <View style={styles.container}>
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})