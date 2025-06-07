import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Título MyCoffe centralizado acima do card */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>MyCoffe</Text>
        <Text style={styles.coffeeIcon}>☕️</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>

        <View style={styles.demoBox}>
          <Text style={styles.demoTitle}>Acesso Demo:</Text>
          <Text style={styles.demoText}>
            Email: <Text style={styles.bold}>user@example.com</Text>
          </Text>
          <Text style={styles.demoText}>
            Senha: <Text style={styles.bold}>123456</Text>
          </Text>
        </View>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="#aaa"
        />

        <Button
          text="Entrar"
          onPress={async () => {
            try {
              await login(email, password);
              router.replace("/(coffe)/home");
            } catch (error) {
              if (error instanceof Error) {
                Alert.alert("Erro ao entrar", error.message);
              } else {
                Alert.alert("Erro ao entrar", "Erro desconhecido.");
              }
            }
          }}
          style={styles.loginButton}
        />

        {/* Opção de cadastro */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Ainda não é usuário? </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.registerLink}>Cadastre-se</Text>
          </TouchableOpacity>
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Georgia",
    color: "#6D4C41",
  },
  coffeeIcon: {
    fontSize: 36,
    marginLeft: 8,
    color: "#6D4C41",
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
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#7B5E57",
    marginBottom: 24,
    textAlign: "center",
  },
  demoBox: {
    backgroundColor: "#FFF3E0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  demoTitle: {
    fontWeight: "600",
    color: "#6D4C41",
    marginBottom: 4,
  },
  demoText: {
    color: "#5D4037",
    fontSize: 14,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#3E2723",
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
  loginButton: {
    width: "100%",
    marginTop: 10,
  },
  registerContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    color: "#7B5E57",
    fontSize: 14,
  },
  registerLink: {
    color: "#6D4C41",
    fontSize: 14,
    fontWeight: "bold",
  },
});
