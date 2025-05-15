import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#C67C4E",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          paddingBottom: 4,
          paddingTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,  // Não exibe o cabeçalho
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={32} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerShown: false,  // Não exibe o cabeçalho
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={32} name="favorite" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerShown: false,  // Não exibe o cabeçalho
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={32} name="notifications" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
