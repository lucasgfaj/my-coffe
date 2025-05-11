import Location from '@/components/Location';
import SearchBar from '@/components/SearchBar';
import CardImg from '@/components/ui/CardImg';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Location />
        <SearchBar />
        <CardImg image={require('../../assets/images/coffe.png')} width={350} height={145} borderRadius={16} />
      </View>

      <View style={styles.bottomSection}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  topSection: {
    //  flex: 3, // 30%
    height: 260,
    backgroundColor: '#313131',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  bottomSection: {
    // flex: 7, // 70%
  },
});
