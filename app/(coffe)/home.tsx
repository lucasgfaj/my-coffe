import Location from '@/components/Location';
import SearchBar from '@/components/SearchBar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Location />
        <SearchBar />
      </View>

      <View style={styles.bottomSection}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 3, // 30%
    backgroundColor: '#313131',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  bottomSection: {
    flex: 7, // 70%
    backgroundColor: 'white',
  },
});
