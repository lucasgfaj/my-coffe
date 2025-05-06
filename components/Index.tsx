import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from './ui/Button';
export default function Index() {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="cover" // Garante que a imagem cubra toda a área
    >
      <View style={styles.container}>
        <Text style={styles.textPrimary}>Fall in Love with Coffee in Blissful Delight!</Text>
        <Text style={styles.textMinimal}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
        <Button
        width={260}
        height={60}
        backgroundColor="#C67C4E"
        borderRadius={12}
        text="Get Started"
        textColor="#fff"
        onPress={() => console.log('Botão pressionado')}
      />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1, // Ocupa todo o espaço da tela
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textMinimal: {
    color: '#A2A2A2',
    fontSize: 14,
    fontWeight: 400,
  }
});
