import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="order"    // Tela de order
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="delivery" // Tela de delivery
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail"     // Tela de tail
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
