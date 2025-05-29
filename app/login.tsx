import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import Button from "@/components/ui/Button";
import useAuth from "@/firebase/hooks/useAuth";

export default function _screen() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123456");

  useEffect(() => {
    if (user) {
      router.replace("/(coffe)/home");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('@/assets/coffee-logo.png')} 
        style={styles.logo}
      /> */}

      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      <Text style={styles.instructionText}>
        Use the provided credentials for demo:
      </Text>
      <Text style={styles.instructionText}>
        Email: <Text style={styles.boldText}>user@example.com</Text>
      </Text>
      <Text style={styles.instructionText}>
        Password: <Text style={styles.boldText}>123456</Text>
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
        placeholderTextColor="#888"
      />

      <Button
        text="Login"
        onPress={async () => {
          try {
            await login(email, password);
            router.replace("/(coffe)/home");
          } catch (error) {
            if (error instanceof Error) {
              Alert.alert("Login Error", error.message);
            } else {
              Alert.alert("Login Error", "Unknown error occurred");
            }
          }
        }}
        style={styles.loginButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    fontFamily: "Montserrat_400Regular",
  },
  instructionText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#8B4513",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
