<<<<<<< HEAD
=======
import { ThemeProvider } from '@/context/ThemeContext';
<<<<<<< HEAD
>>>>>>> develop
=======
import TokenContextProvider from '@/context/useContext';
>>>>>>> develop
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
export default function Layout() {
  return (
       <ActionSheetProvider>
<<<<<<< HEAD
=======
         <ThemeProvider>
<<<<<<< HEAD
>>>>>>> develop
=======
    <TokenContextProvider>

>>>>>>> develop
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    </ThemeProvider>
>>>>>>> develop
=======
    </TokenContextProvider>
    </ThemeProvider>
    
>>>>>>> develop
    </ActionSheetProvider>
  );
}