import Index from '@/components/Index';
import useFirebase from '@/firebase/hooks/useFirebase';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
 

export default function App() {
  useFirebase();
  return (
    <View style={styles.container}>
        <Index/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});