import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
export default function Layout() {
  return (
       <ActionSheetProvider>
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
        name="index"
        // options={{ title: 'MyCoffe' }}
        options={{ headerShown: false}} 
   
      />
      <Stack.Screen
        name="login"
        // options={{ title: 'MyCoffe' }}
        options={{ headerShown: false}} 
   
      />
    </Stack>
    </ActionSheetProvider>
  );
}