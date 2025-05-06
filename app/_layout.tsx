import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        // options={{ title: 'MyCoffe' }}
        options={{ headerShown: false}} 
   
      />
      <Stack.Screen   
        name="tabs"
        // options={{
        //   headerTitle: 'Sair', // Aqui troca o "Tabs"
        // }}
        options={{ headerShown: false}} 
        />
    </Stack>
  );
}