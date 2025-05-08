import Location from '@/components/Location';
import React from 'react';
import { StyleSheet, View } from 'react-native';
export default function home() {
  return (
    <View style={styles.container}>
      <Location/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});