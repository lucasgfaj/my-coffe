import { ThemeProvider } from '@/context/ThemeContext';
import TokenContextProvider from '@/context/useContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
export default function Layout() {
  return (
       <ActionSheetProvider>
         <ThemeProvider>
    <TokenContextProvider>

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
    </TokenContextProvider>
    </ThemeProvider>    
    </ActionSheetProvider>
  );
}