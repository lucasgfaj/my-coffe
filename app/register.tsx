import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Button from "@/components/ui/Button";
import api from "@/services/api"; // << PocketBase API

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name.trim()) {
      Alert.alert("Erro", "Por favor, insira seu nome.");
      return;
    }
    if (!email.trim()) {
      Alert.alert("Erro", "Por favor, insira seu email.");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/api/collections/users/records", {
        email,
        password,
        passwordConfirm: password,
        name,
      });

      Alert.alert("Sucesso", "Usuário registrado com sucesso!");
      router.replace("/login");
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message || "Erro desconhecido";
      Alert.alert("Erro ao registrar", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          editable={!loading}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          editable={!loading}
        />

        <Button
          text={loading ? "Registrando..." : "Registrar"}
          onPress={handleRegister}
          style={styles.registerButton}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Já tem uma conta? </Text>
          <Text
            style={styles.loginLink}
            onPress={() => router.push("/login")}
          >
            Entre aqui
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF8F3",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  innerContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 32,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4E342E",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDD0C8",
  },
  registerButton: {
    width: "100%",
    marginTop: 10,
  },
  loginContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "#7B5E57",
    fontSize: 14,
  },
  loginLink: {
    color: "#6D4C41",
    fontSize: 14,
    fontWeight: "bold",
  },
});
