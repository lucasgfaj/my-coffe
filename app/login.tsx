import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Button from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import { useTokenContext } from "@/context/useContext";
import api from "@/services/api";
import { StyleSheet } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const { theme, colors, toggleTheme } = useTheme();
  const { token, setToken, setUserId } = useTokenContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      router.replace("/(coffe)/home");
    }
  }, [token]);
const login = async () => {
  try {
    setLoading(true);

    const response = await api.post("/api/collections/users/auth-with-password", {
      identity: email,
      password: password,
    });

    const token = response.data.token;
    const user = response.data.record; // Aqui estão os dados do usuário logado

    console.log("Token:", token);
    console.log("ID do usuário:", user.id);
    console.log("Nome:", user.name);
    console.log("Email:", user.email);

    setToken(token);
    setUserId(user.id); // Salva o ID do usuário no contexto

    // Se quiser salvar o ID do usuário também, crie um setUser ou algo assim no contexto

    router.replace("/(coffe)/home");
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Erro ao entrar", error.message);
    } else {
      Alert.alert("Erro desconhecido", "Algo deu errado.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.themeToggleButton, { backgroundColor: colors.primary }]}
      >
        <Text style={[styles.themeToggleButtonText, { color: colors.text }]}>
          {theme === 'light' ? '🌙' : '🌞'}
        </Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, { color: colors.primary }]}>MyCoffe</Text>
        <Text style={[styles.coffeeIcon, { color: colors.primary }]}>☕️</Text>
      </View>

      <View style={[styles.innerContainer, {
        backgroundColor: colors.cardBackground,
        shadowColor: colors.text === '#000000' ? '#000' : 'transparent',
      }]}>
        <Text style={[styles.title, { color: colors.text }]}>Bem-vindo de volta!</Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>Acesse sua conta</Text>

        <TextInput
          style={[styles.input, {
            backgroundColor: colors.inputBackground,
            color: colors.text,
            borderColor: colors.borderColor,
          }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email ou nome de usuário"
          placeholderTextColor={colors.text}
          autoCapitalize="none"
        />

        <TextInput
          style={[styles.input, {
            backgroundColor: colors.inputBackground,
            color: colors.text,
            borderColor: colors.borderColor,
          }]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor={colors.text}
        />

        <Button
          text={loading ? "Entrando..." : "Entrar"}
          onPress={login}
          style={styles.loginButton}
          backgroundColor={colors.primary}
          textColor={colors.text}
        />

        <View style={styles.registerContainer}>
          <Text style={[styles.registerText, { color: colors.text }]}>
            Ainda não é usuário?
          </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={[styles.registerLink, { color: colors.primary }]}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  themeToggleButton: {
    position: 'absolute',
    top: 60,
    right: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  themeToggleButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
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
  },
  coffeeIcon: {
    fontSize: 36,
    marginLeft: 8,
  },
  innerContainer: {
    width: "100%",
    maxWidth: 400,
    padding: 32,
    borderRadius: 16,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  demoBox: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  demoTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  demoText: {
    fontSize: 14,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
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
    fontSize: 14,
  },
  registerLink: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
